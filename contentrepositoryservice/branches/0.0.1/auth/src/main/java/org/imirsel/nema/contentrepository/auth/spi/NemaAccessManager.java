package org.imirsel.nema.contentrepository.auth.spi;

import java.security.Principal;
import java.util.Set;

import javax.jcr.AccessDeniedException;
import javax.jcr.PathNotFoundException;
import javax.jcr.RepositoryException;
import javax.jcr.security.AccessControlPolicy;
import javax.jcr.security.Privilege;
import javax.security.auth.Subject;

import org.apache.jackrabbit.core.HierarchyManager;
import org.apache.jackrabbit.core.id.ItemId;
import org.apache.jackrabbit.core.security.AMContext;
import org.apache.jackrabbit.core.security.AbstractAccessControlManager;
import org.apache.jackrabbit.core.security.AccessManager;
import org.apache.jackrabbit.core.security.AnonymousPrincipal;
import org.apache.jackrabbit.core.security.SystemPrincipal;
import org.apache.jackrabbit.core.security.authorization.AccessControlProvider;
import org.apache.jackrabbit.core.security.authorization.NamedAccessControlPolicyImpl;
import org.apache.jackrabbit.core.security.authorization.Permission;
import org.apache.jackrabbit.core.security.authorization.PrivilegeRegistry;
import org.apache.jackrabbit.core.security.authorization.WorkspaceAccessManager;
import org.apache.jackrabbit.spi.Name;
import org.apache.jackrabbit.spi.Path;
import org.apache.jackrabbit.spi.commons.conversion.NamePathResolver;

public class NemaAccessManager extends AbstractAccessControlManager implements
		AccessManager {

	  /**
     * The policy returned upon {@link #getEffectivePolicies(String)}
     */
    private static final AccessControlPolicy POLICY = new NamedAccessControlPolicyImpl("Nema AccessControlPolicy");

    /**
     * Subject whose access rights this AccessManager should reflect
     */
    private Subject subject;

    /**
     * hierarchy manager used for ACL-based access control model
     */
    private HierarchyManager hierMgr;

    private NamePathResolver resolver;
    private WorkspaceAccessManager wspAccessMgr;
    private PrivilegeRegistry privilegeRegistry;

    private boolean initialized;

    private boolean system;
    private boolean anonymous;

    /**
     * Empty constructor
     */
    public NemaAccessManager() {
        initialized = false;
        anonymous = false;
        system = false;
    }

    //------------------------------------------------------< AccessManager >---
    /**
     * {@inheritDoc}
     */
    public void init(AMContext context)
            throws AccessDeniedException, Exception {
        init(context, null, null);
    }

    /**
     * {@inheritDoc}
     */
    public void init(AMContext context, AccessControlProvider acProvider, WorkspaceAccessManager wspAccessManager) throws AccessDeniedException, Exception {
        if (initialized) {
            throw new IllegalStateException("already initialized");
        }

        subject = context.getSubject();
        hierMgr = context.getHierarchyManager();
        resolver = context.getNamePathResolver();
        privilegeRegistry = new PrivilegeRegistry(resolver);
        wspAccessMgr = wspAccessManager;
        anonymous = !subject.getPrincipals(AnonymousPrincipal.class).isEmpty();
        system = !subject.getPrincipals(SystemPrincipal.class).isEmpty();

        // @todo check permission to access given workspace based on principals
        initialized = true;

        if (!canAccess(context.getWorkspaceName())) {
            throw new AccessDeniedException("Not allowed to access Workspace " + context.getWorkspaceName());
        }
    }

    /**
     * {@inheritDoc}
     */
    public synchronized void close() throws Exception {
        checkInitialized();
        initialized = false;
    }

    /**
     * {@inheritDoc}
     */
    public void checkPermission(ItemId id, int permissions)
            throws AccessDeniedException, RepositoryException {
        if (!isGranted(id, permissions)) {
            throw new AccessDeniedException("Access denied");
        }
    }

    /**
     * {@inheritDoc}
     */
    public void checkPermission(Path absPath, int permissions) throws AccessDeniedException, RepositoryException {
        if (!isGranted(absPath, permissions)) {
            throw new AccessDeniedException("Access denied");
        }
    }

    /**
     * {@inheritDoc}
     */
    public boolean isGranted(ItemId id, int permissions) throws RepositoryException {
        checkInitialized();
        
        //Path path=hierMgr.getPath(id);
        // System.out.println("PATH: "+ path.getString() + "  principal: " + subject.getPrincipals().iterator().next().getName());
        if (system) {
            // system has always all permissions
            return true;
        } else if (anonymous) {
            // anonymous is always denied WRITE & REMOVE permissions
            if ((permissions & WRITE) == WRITE
                    || (permissions & REMOVE) == REMOVE) {
                return false;
            }
        }

        // @todo check permission based on principals
        return true;
    }

    public boolean isGranted(Path absPath, int permissions) throws RepositoryException {
        return internalIsGranted(absPath, permissions);
    }

    public boolean isGranted(Path parentPath, Name childName, int permissions) throws RepositoryException {
        return internalIsGranted(parentPath, permissions);
    }

    public boolean canRead(Path itemPath) throws RepositoryException {
        return true;
    }

    private boolean internalIsGranted(Path absPath, int permissions) throws RepositoryException {
        if (!absPath.isAbsolute()) {
            throw new RepositoryException("Absolute path expected");
        }
        checkInitialized();
        if (system) {
            // system has always all permissions
            return true;
        } else if (anonymous) {
            // anonymous is only granted READ permissions
            return permissions == Permission.READ;
        }

        // @todo check permission based on principals
        return true;
    }

    /**
     * {@inheritDoc}
     */
    public boolean canAccess(String workspaceName) throws RepositoryException {
        if (system || wspAccessMgr == null) {
            return true;
        }
        return wspAccessMgr.grants(subject.getPrincipals(), workspaceName);
    }

    //-----------------------------------------------< AccessControlManager >---
    /**
     * {@inheritDoc}
     */
    public boolean hasPrivileges(String absPath, Privilege[] privileges) throws PathNotFoundException, RepositoryException {
        checkInitialized();
        // make sure absPath points to an existing node
        checkValidNodePath(absPath);

        if (privileges == null || privileges.length == 0) {
            // null or empty privilege array -> return true
            return true;
        } else {
            if (system) {
                // system has always all permissions
                return true;
            } else if (anonymous) {
                if (privileges.length != 1 || !privileges[0].equals(privilegeRegistry.getPrivilege(Privilege.JCR_READ))) {
                    // anonymous is only granted READ permissions
                    return false;
                }
            }

            // @todo check permission based on principals
            return true;
        }
    }

    /**
     * {@inheritDoc}
     */
    public Privilege[] getPrivileges(String absPath) throws PathNotFoundException, RepositoryException {
        checkInitialized();
        checkValidNodePath(absPath);

        Privilege priv;
        if (anonymous) {
            priv = privilegeRegistry.getPrivilege(Privilege.JCR_READ);
        } else if (system) {
            priv = privilegeRegistry.getPrivilege(Privilege.JCR_ALL);
        } else {
            // @todo check permission based on principals
            priv = privilegeRegistry.getPrivilege(Privilege.JCR_ALL);
        }
        return new Privilege[] {priv};
    }

    /**
     * {@inheritDoc}
     */
    public AccessControlPolicy[] getEffectivePolicies(String absPath) throws PathNotFoundException, AccessDeniedException, RepositoryException {
        checkInitialized();
        checkPermission(absPath, Permission.READ_AC);

        return new AccessControlPolicy[] {POLICY};
    }

    //---------------------------------------< AbstractAccessControlManager >---
    /**
     * @see AbstractAccessControlManager#checkInitialized()
     */
    protected void checkInitialized() throws IllegalStateException {
        if (!initialized) {
            throw new IllegalStateException("not initialized");
        }
    }

    /**
     * @see AbstractAccessControlManager#checkPermission(String,int)
     */
    protected void checkPermission(String absPath, int permission) throws AccessDeniedException, PathNotFoundException, RepositoryException {
        checkValidNodePath(absPath);
        if (anonymous && permission != Permission.READ) {
            throw new AccessDeniedException("Anonymous may only READ.");
        }
    }

    /**
     * @see AbstractAccessControlManager#getPrivilegeRegistry()
     */
    protected PrivilegeRegistry getPrivilegeRegistry()
            throws RepositoryException {
        checkInitialized();
        return privilegeRegistry;
    }

    /**
     * @see AbstractAccessControlManager#checkValidNodePath(String)
     */
    protected void checkValidNodePath(String absPath) throws PathNotFoundException, RepositoryException {
        Path path = resolver.getQPath(absPath);
        if (!path.isAbsolute()) {
            throw new RepositoryException("Absolute path expected. Found: " + absPath);
        }

        if (hierMgr.resolveNodePath(path) == null) {
            throw new PathNotFoundException(absPath);
        }
    }

    /**
     * @see org.apache.jackrabbit.api.security.JackrabbitAccessControlManager#hasPrivileges(String, Set, Privilege[])
     */
    public boolean hasPrivileges(String absPath, Set<Principal> principals, Privilege[] privileges) throws PathNotFoundException, RepositoryException {
        if (anonymous) {
            // anonymous doesn't have READ_AC privilege
            throw new AccessDeniedException();
        }
        
        if (principals.size() == 1) {
            Principal princ = principals.iterator().next();
            if (princ instanceof AnonymousPrincipal) {
                return privileges.length == 1 && privileges[0].equals(privilegeRegistry.getPrivilege(Privilege.JCR_READ));
            }
        }

        // @todo check permission based on principals
        return true;
    }

    /**
     * @see org.apache.jackrabbit.api.security.JackrabbitAccessControlManager#getPrivileges(String, Set)
     */
    public Privilege[] getPrivileges(String absPath, Set<Principal> principals) throws PathNotFoundException, RepositoryException {
        if (anonymous) {
            // anonymous doesn't have READ_AC privilege
            throw new AccessDeniedException();
        }

        if (principals.size() == 1) {
            Principal princ = principals.iterator().next();
            if (princ instanceof AnonymousPrincipal) {
                return new Privilege[] {privilegeRegistry.getPrivilege(Privilege.JCR_READ)};
            }
        }

        // @todo check permission based on principals
        return new Privilege[] {privilegeRegistry.getPrivilege(Privilege.JCR_ALL)};
    }

}
