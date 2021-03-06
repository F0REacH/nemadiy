/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package org.imirsel.nema.repository;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * A utility for loading and storing properties for the JSTORAuctionCatalogues
 * community editing platform software. 
 * 
 * @author kriswest
 */
public class RepositoryProperties {

    public static final String DB_LOCATOR = "DBLocator";
    public static final String DB_NAME = "DBName";
    public static final String DB_USER = "DBUsername";
    public static final String DB_PASS = "DBPassword";

    private static Properties repoProps;
    static {
        repoProps = new Properties();
        repoProps.setProperty(DB_LOCATOR, "jdbc:mysql://nema.lis.uiuc.edu:3306/");
        repoProps.setProperty(DB_NAME, "nemadatarepository_dev");
        
        try {
            InputStream iStream = RepositoryProperties.class.getResourceAsStream("/RepositoryProperties.properties");
            if(iStream != null) {
                repoProps.load(iStream);
            }else {
                System.out.println("No custom properties found, using default values.");
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    private RepositoryProperties() {
        
    }
    
    /**
     * Returns the value of the specified property or null if the property does 
     * not exist.
     * @param propertyName The property to return the value of.
     * @return The value of the property or null if the property does not exist.
     */
    public static String getProperty(String propertyName) {
        return repoProps.getProperty(propertyName);
    }
    
    /**
     * Sets the value of the specified property.
     * @param propertyName The property to return the value of.
     * @param value The value of the property.
     */
    public static void setProperty(String propertyName, String value) {
        repoProps.setProperty(propertyName,value);
    }
    
    /**
     * Returns true if the specified property exists in the properties or their 
     * defaults and false otherwise.
     * @param propertyName The property to check for existence.
     * @return True if the property has a value or default value, false 
     * otherwise.
     */
    public static boolean containsProperty(String propertyName){
        return (repoProps.getProperty(propertyName) != null);
    }
    
    /**
     *This main method will print out the properties that will be loaded using the classpath
     *and default properties files. This can be run before running another application in order to verify
     *that the correct parameters will be used.
     */
    public static void main(String[] args) {
        if(repoProps == null) {
            System.out.println("There was an error and the properties object is null");
        }else {
            repoProps.list(System.out);
        }
    }
}

