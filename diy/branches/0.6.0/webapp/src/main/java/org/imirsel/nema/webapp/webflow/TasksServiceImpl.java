package org.imirsel.nema.webapp.webflow;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.UUID;
import java.util.Map.Entry;

import javax.jcr.SimpleCredentials;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.imirsel.nema.annotations.parser.beans.DataTypeBean;
import org.imirsel.nema.contentrepository.client.ArtifactService;
import org.imirsel.nema.contentrepository.client.ContentRepositoryServiceException;
import org.imirsel.nema.flowservice.FlowService;
import org.imirsel.nema.flowservice.MeandreServerException;
import org.imirsel.nema.model.Component;
import org.imirsel.nema.model.ExecutableBundle;
import org.imirsel.nema.model.Flow;
import org.imirsel.nema.model.Job;
import org.imirsel.nema.model.Property;
import org.imirsel.nema.model.ResourcePath;
import org.imirsel.nema.model.Role;
import org.imirsel.nema.model.User;
import org.imirsel.nema.service.UserManager;
import org.imirsel.nema.webapp.model.UploadedExecutableBundle;
import org.springframework.binding.message.MessageBuilder;
import org.springframework.binding.message.MessageContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.webflow.context.ExternalContext;
import org.springframework.webflow.core.collection.ParameterMap;
import org.springframework.webflow.execution.RequestContext;

/**
 * Action class for the task template flow generation webflow.
 * 
 * @author gzhu1
 * @since 0.6.0
 * 
 */
public class TasksServiceImpl {

	static private Log logger = LogFactory.getLog(TasksServiceImpl.class);

	private FlowService flowService;
	private UserManager userManager;
	private ArtifactService artifactService;
	private String uploadDirectory;
	private String physicalDir;
	private String webDir;

	/**
	 * properties' name in the component datatype map
	 */
	final static String REMOTE_COMPONENT = "_remoteDynamicComponent";
	final static String CREDENTIALS = "_credentials";
	final static String EXECUTABLE_URL = "profileName";
	final static String OS = "_os";
	final static String GROUP = "_group";

	public String getPhysicalDir() {
		return physicalDir;
	}

	public String getWebDir() {
		return webDir;
	}

	/**
	 * change after migrate to datamap back tag upload ExecutableBundle to
	 * content repository, remove the old executableBundle if there is one;
	 * replace/add the new ResourcePath of executablebundle into the
	 * executableMap;
	 * 
	 * @param component
	 * @param parameters
	 *            modified, the new path replace the old/is added
	 * @param os
	 * @param group
	 * @param bundle
	 * @param uuid
	 * @param executableMap
	 *            Note that this map is going to be modified, old path is
	 *            replaced by new path.
	 * @throws ContentRepositoryServiceException
	 */
	public void addExecutable(final Component component,
			final Map<String, Property> datatypeMap,
			final UploadedExecutableBundle bundle, final UUID uuid,
			Map<Component, ResourcePath> executableMap,
			MessageContext messageContext)
			throws ContentRepositoryServiceException {

		logger.debug("add executable url into parameter for "
				+ bundle.getFileName());
		SimpleCredentials credential = userManager.getCurrentUserCredentials();
		logger.debug("with credential " + credential.getUserID() + " string: "
				+ new String(credential.getPassword()));
		String credentialString = credential.getUserID() + ":"
				+ new String(credential.getPassword());
		datatypeMap.get(CREDENTIALS).setValue(credentialString);
		datatypeMap.get(REMOTE_COMPONENT).setValue("true");
		datatypeMap.get(OS).setValue(bundle.getPreferredOs());
		datatypeMap.get(GROUP).setValue(bundle.getGroup());
		deleteExecutableFromRepository(component, executableMap.get(component),
				credential);
		ResourcePath path = artifactService.saveExecutableBundle(credential,
				uuid.toString(), bundle);
		executableMap.put(component, path);
		String uri = path.getProtocol() +":"+ path.getWorkspace() +"://"+path.getPath();
		datatypeMap.get(EXECUTABLE_URL).setValue(uri);
		if (path != null) {
			// MessageContext messageContext=requestContext.getMessageContext();
			messageContext.addMessage(new MessageBuilder().info().defaultText(
					"Executable profile was successfully saved.").build());
			logger.debug("resource path is " + path.getPath());
		} else {
			throw new ContentRepositoryServiceException(

			"An error occurred while saving the executable profile: "
					+ bundle.getFileName());
		}

	}

	/**
	 * remove the executable bundle from he content repository service,
	 * 
	 * @param component
	 * @param executableMap
	 * @param datatypeMap
	 */
	public void removeExecutable(Component component,
			Map<Component, ResourcePath> executableMap,
			Map<String, Property> datatypeMap)
			throws ContentRepositoryServiceException {
		SimpleCredentials credential = userManager.getCurrentUserCredentials();
		if (executableMap.containsKey(component)) {
			ResourcePath oldPath = executableMap.get(component);
			deleteExecutableFromRepository(component, oldPath, credential);
			executableMap.remove(component);
			datatypeMap.get(EXECUTABLE_URL).setValue("");
		}

	}

	/**
	 * clear all executable bundles sent over to content repository
	 * 
	 * @param executableMap
	 */
	public void clearBundles(Map<Component, ResourcePath> executableMap)
			throws ContentRepositoryServiceException {
		SimpleCredentials credential = userManager.getCurrentUserCredentials();
		for (Component component : executableMap.keySet()) {
			ResourcePath oldPath = executableMap.get(component);
			deleteExecutableFromRepository(component, oldPath, credential);
		}
	}

	private void deleteExecutableFromRepository(Component component,
			ResourcePath path, SimpleCredentials credential)
			throws ContentRepositoryServiceException {
		try {
			if ((path != null) && (artifactService.exists(credential, path))) {
				logger.info("remove from content repository executable bundle:"
						+ path);
				artifactService.removeExecutableBundle(credential, path);
			}
		} catch (ContentRepositoryServiceException e) {
			logger.error(e, e);
			throw (e);
		}

	}

	
	/**
	 * Retrieve the Executable bundle with resource path {@link path}, and
	 * populated the extra fields for UploadedExecutableBundle
	 * 
	 * @param path
	 * @param datatypeMap
	 * @return
	 */
	public UploadedExecutableBundle findBundle(ResourcePath path,
			Map<String, Property> datatypeMap) {
		SimpleCredentials credential = userManager.getCurrentUserCredentials();
		UploadedExecutableBundle bundle = null;
		try {
			if ((path != null) && (artifactService.exists(credential, path))) {
				ExecutableBundle oldBundle = artifactService
						.getExecutableBundle(credential, path);
				bundle = new UploadedExecutableBundle(oldBundle);
				if (bundle == null)
					bundle = new UploadedExecutableBundle();
				bundle.setPreferredOs(datatypeMap.get(OS).getValue());
				bundle.setGroup(datatypeMap.get(GROUP).getValue());
			}
		} catch (ContentRepositoryServiceException e) {
			logger.error(e, e);
		}
		return bundle;
	}

	/**
	 * return the list of flow templates belong to type, all templates are
	 * returned if type is not valid. used a very lenient criteria, check both
	 * flowtype and keywords
	 * 
	 * @param type
	 *            controlled by {@link Flow.FlowType}, first letter needs
	 *            capitalize.
	 * @return
	 */
	public List<Flow> getFlowTemplates(String type) {
		Flow.FlowType flowType = (type == null ? null : Flow.FlowType
				.toFlowType(type));

		Set<Flow> flowSet = this.flowService.getFlowTemplates();
		List<Flow> list = new ArrayList<Flow>();
		if (flowType != null) {
			for (Flow flow : flowSet) {
				if ((flow.getType().equals(flowType)))
					list.add(flow);
			}
		} else {
			list.addAll(flowSet);
		}
		return list;
	}

	// TODO this method is the same as the one in ComponentPropertyTag, might
	// need some
	// refaction to get rid of one
	private String getName(String component, String propertyName) {
		if (component == null) {
			return propertyName;
		}
		int index = component.lastIndexOf("/");
		if (index == -1) {
			return component + "_" + propertyName;
		}
		int second = component.substring(0, index).lastIndexOf("/");
		String cname = component.substring(second + 1, index);
		String count = component.substring(index + 1);
		return cname + "_" + count + "_" + propertyName;
	}

	/**
	 * @return roles from the default user manager
	 */
	public String[] getRoles() {
		Set<Role> roleList = this.userManager.getCurrentUser().getRoles();
		int size = roleList.size();

		String[] roles = new String[size];
		int i = 0;
		for (Role role : roleList) {
			roles[i] = role.getName();
			i++;
		}
		return roles;
	}

	/**
	 * return Boolean (not boolean) value for webflow mapping.
	 * 
	 * @param datatypeMap
	 * @return
	 */
	public Boolean isRemoteServiceComponent(Map<String, Property> datatypeMap) {

		return datatypeMap.keySet().contains(REMOTE_COMPONENT)
				&& (datatypeMap.get(REMOTE_COMPONENT).getDefaultValue()
						.toString().equalsIgnoreCase("true"));
	}

	/**
	 * Create a job with all the properties in datatypeMaps.
	 * 
	 * @param flow
	 * @param datatypeMaps
	 * @param name
	 * @param description
	 * @return
	 * @throws MeandreServerException
	 */
	public Job run(Flow flow,
			Map<Component, Map<String, Property>> datatypeMaps, String name,
			String description) throws MeandreServerException {
		HashMap<String, String> paramMap = new HashMap<String, String>();

		Component component;
		for (Entry<Component, Map<String, Property>> mapsEntry : datatypeMaps
				.entrySet()) {
			component = mapsEntry.getKey();
			for (Entry<String, Property> entry : mapsEntry.getValue()
					.entrySet()) {
				paramMap.put(
						getName(component.getInstanceUri(), entry.getValue().getName()),
						entry.getValue().getValue());
			}

		}
		String token = System.currentTimeMillis() + "-token";
		String flowId = flow.getId().toString();
		String flowUri = flow.getUri();

		logger.debug("start to test run");
		if (flowId == null || flowUri == null) {
			logger
					.error("flowId or flowUri is null -some severe error happened...");
			throw new MeandreServerException("flowId or flowUri is null");
		}
		User user = userManager.getCurrentUser();
		if (user == null) {
			logger.error("user is null");
			throw new MeandreServerException("Could not get the user");
		}

		if (name == null) {
			name = paramMap.get("name");
			if (name == null) {
				name = flow.getName() + File.separator + token;
			}
		}
		if (description == null) {
			description = paramMap.get("description");
			if (description == null) {
				description = flow.getDescription() + " for flow: " + token;
			}
		}
		long userId = user.getId();
		Flow instance = new Flow();
		instance.setCreatorId(userId);
		instance.setDateCreated(new Date());
		instance.setInstanceOf(flow);
		instance.setKeyWords(flow.getKeyWords());
		instance.setName(name);
		instance.setTemplate(false);
		instance.setDescription(description);
		instance.setType(flow.getType());
		instance.setTypeName(flow.getTypeName());

		SimpleCredentials credential=userManager.getCurrentUserCredentials();
		instance = this.flowService.createNewFlow(credential, instance, paramMap, flowUri, user
				.getId());
		long instanceId = instance.getId();

		Job job = this.flowService.executeJob(credential,token, name, description,
				instanceId, user.getId(), user.getEmail());
		return job;

	}

	public void setArtifactService(ArtifactService artifactService) {
		this.artifactService = artifactService;
	}

	/**
	 * extracted the component list from the keyset of datatypeMaps, Note: this
	 * method should be called only once for one flow template. The order of the
	 * list is used for index and should not be changed.
	 * 
	 * @param datatypeMaps
	 * @return
	 */
	public List<Component> extractComponentList(
			Map<Component, Map<String, Property>> datatypeMaps) {
		List<Component> list = new ArrayList<Component>(datatypeMaps.keySet());
		Collections.sort(list);
		return list;
	}

	/**
	 * Set the datatypeMaps from the flow.
	 * 
	 * @param flow
	 * @return
	 */
	public Map<Component, Map<String, Property>> loadDatatypeMaps(Flow flow) {

		Map<Component, Map<String, Property>> datatypeMaps = new HashMap<Component, Map<String, Property>>();
		List<Component> componentList = flowService
				.getComponents(flow.getUri());
		logger.info("componentList: " + componentList.size());
		for (int i = 0; i < componentList.size(); i++) {
			Component component = componentList.get(i);
			if (!component.isHidden()) datatypeMaps.put(component, flowService
					.getComponentPropertyDataType(component, flow.getUri()));

		}
		logger.debug("done populating default parameters now.");

		return datatypeMaps;
	}

	public void setFlowService(FlowService flowService) {
		this.flowService = flowService;
	}

	/**
	 * By default this field is set by method {@link setUploadingPaths}, and
	 * this field <B>must</B> match field webDir {@link setWebDir}. It is the
	 * physical directory used to store the uploading field of file type. This
	 * one should end with proper "/" or "\" TODO this is a bad implementation
	 * of file upload, it needs more robust implementation
	 * 
	 * @param physicalDir
	 */
	public void setPhysicalDir(String physicalDir) {
		this.physicalDir = physicalDir;
	}

	/**
	 * Set the upload directory, this one should start with "/" and end with no
	 * "/", an empty one would be "". The method should check on it and correct
	 * it if possible.
	 * 
	 * TODO this is a bad implementation of file upload, it needs more robust
	 * implementation
	 * 
	 * @param uploadDirectory
	 */
	public void setUploadDirectory(String uploadDirectory) {
		if ((!uploadDirectory.isEmpty()) && (!uploadDirectory.startsWith("/"))) {
			uploadDirectory = "/" + uploadDirectory;
		}
		if ((!uploadDirectory.isEmpty()) && (uploadDirectory.endsWith("/"))) {
			uploadDirectory = uploadDirectory.substring(0, uploadDirectory
					.length() - 1);
		}
		this.uploadDirectory = uploadDirectory;
	}

	/**
	 * set the real physical/web path from the servlet context/request for
	 * uploading, default behavior, when webDir has value (set by outside), skip
	 * this step. TODO this is a bad implementation of file upload, it needs
	 * more robust implementation
	 * 
	 * @param externalContext
	 * @param httpServletRequest
	 */
	public void setUploadingPaths(ExternalContext externalContext, UUID uuid) {
		if ((webDir == null) || (webDir.isEmpty())) {
			ServletContext context = (ServletContext) externalContext
					.getNativeContext();
			HttpServletRequest req = (HttpServletRequest) externalContext
					.getNativeRequest();
			String subDir = uploadDirectory + "/" + req.getRemoteUser() + "/"
					+ uuid + "/";
			physicalDir = context.getRealPath(subDir);
			// Create the directory if it doesn't exist
			if (!physicalDir.endsWith(File.separator)) {
				physicalDir = physicalDir + File.separator;
			}

			webDir = "http://" + req.getServerName() + ":"
					+ req.getServerPort() + req.getContextPath() + subDir;

			logger
					.info("set the uploading path: " + physicalDir + ","
							+ webDir);
			logger.debug("the context path:" + req.getContextPath()
					+ ", and subDir:" + subDir);
		}
	}

	public void setUserManager(UserManager userManager) {
		this.userManager = userManager;
	}

	/**
	 * By default this field is set by method {@link setUploadingPaths}, and
	 * this field <B>must</B> match field physicalDir {@link setPhysicalDir}. It
	 * is the web directory used to store the uploading field of file type. This
	 * one should end with "/"
	 * 
	 * @param webDir
	 */
	public void setWebDir(String webDir) {
		this.webDir = webDir;
	}

	/**
	 * hide some properties for remote executable components that set in the
	 * task/executable subflow capitalize the first letter of the key(name) of
	 * the datatypeMap for display.
	 * 
	 * @param datatypeMap
	 * @return the datatype map fields that should be shown
	 */
	public Map<String, Property> shownRemoteMap(
			Map<String, Property> datatypeMap) {
		Map<String, Property> shown = new HashMap<String, Property>();
		shown.putAll(datatypeMap);
		shown.remove(REMOTE_COMPONENT);
		shown.remove(CREDENTIALS);
		shown.remove(EXECUTABLE_URL);
		shown.remove(GROUP);
		shown.remove(OS);
		shown = shownMap(shown);
		return shown;
	}

	/**
	 * capitalize the first letter of the key(name) of the datatypeMap for
	 * display.
	 * 
	 * @param datatypeMap
	 * @return
	 */
	public Map<String, Property> shownMap(Map<String, Property> datatypeMap) {
		Map<String, Property> shown = new HashMap<String, Property>();
		for (Map.Entry<String, Property> entry : datatypeMap.entrySet()) {
			String key = entry.getKey();
			String newKey = "no name";
			if (!key.isEmpty()) {
				newKey = key.substring(0, 1).toUpperCase() + key.substring(1);
			}
			shown.put(newKey, entry.getValue());
		}
		return shown;
	}

	public int test(RequestContext context) {
		ServletContext servletContext = (ServletContext) context
				.getExternalContext().getNativeContext();
		String uploadDir = (servletContext).getRealPath("/") + "test";
		logger.debug(uploadDir);
		return 1;
	}

	/**
	 * Only for testing purpose
	 * 
	 * @param input
	 * @return
	 */
	public int test(String input) {

		logger.debug(input);
		return 1;
	}

	/**
	 * Update the dataMap with submitted data for one component
	 * 
	 * @param parameters
	 *            http request parameters
	 * @param dataMap
	 *            dataMap for updated
	 */
	public void updateDataMap(ParameterMap parameters,
			Map<String, Property> dataMap) {
		for (String key : dataMap.keySet()) {
			Property property = dataMap.get(key);
			if (parameters.contains(property.getName())) {
				List<DataTypeBean> ltb = property.getDataTypeBeanList();
				if ((ltb != null) && (!ltb.isEmpty())
						&& (ltb.get(0).getRenderer() != null)
						&& (ltb.get(0).getRenderer().endsWith("FileRenderer"))) {
					MultipartFile file = parameters.getMultipartFile(property
							.getName());
					if ((file != null) && (!file.isEmpty())) {
						File dirPath = new File(physicalDir);

						if (!dirPath.exists()) {
							dirPath.mkdirs();
						}
						String filename = file.getOriginalFilename();
						File uploadedFile = new File(physicalDir + filename);
						try {
							file.transferTo(uploadedFile);
						} catch (IllegalStateException e) {

							logger.error(e, e);
						} catch (IOException e) {

							logger.error(e, e);
						}
						property.setValue(webDir + filename);
					}
				} else {
					property.setValue(parameters.get(property.getName()));
				}
			}
			
		}// for loop
	}

}
