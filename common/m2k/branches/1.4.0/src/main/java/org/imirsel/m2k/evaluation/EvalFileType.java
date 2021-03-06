/*
 * EvalFileType.java
 *
 * Created on 23 October 2006, 22:21
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package org.imirsel.m2k.evaluation;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

import org.imirsel.m2k.util.Signal;

/**
 * Interface defining the methods of classes to read and write evaluation/prediction data files.
 * 
 * @author Kris West
 */
public interface EvalFileType {
    
    /**
     * Read data on one or more tracks from an evaluation file. Supports both list file
     * reader types and file-per-track reader types.
     * 
     * @param theFile The file encoding the evaluation data on one or more tracks  tracks.
     * @return A <code>List</code> of one or more <code>DataObj<code> Objects encoding the 
     * evaluation data read.
     * @throws IllegalArgumentException Thrown if the file is not in the expected format.
     * @throws FileNotFOundException Thrown if the file didn't exist or couldn't be read.
     * @throws IOException Thrown if there is a problem reading the file, unrelated to format.
     */
    public List<DataObj> readFile(File theFile) throws IllegalArgumentException, FileNotFoundException, IOException;
    
    /**
     * Parse a directory of data files and read data on one or more tracks from each file. 
     * If non-null a filename extension is used to filter the files read. Supports both list 
     * file reader types and file-per-track reader types. 
     * @param theDir The directory to search for evaluation files.
     * @param extension If non-null files read must have this extension at the end of their
     * names.
     * @return A <code>List</code> of <code>List</code>s of one or more <code>DataObj<code> 
     * Objects encoding the evaluation data read.
     * @throws IllegalArgumentException Thrown if a file is not in the expected format.
     * @throws FileNotFOundException Thrown if the directory didn't exist or couldn't be read.
     * @throws IOException Thrown if there is a problem reading a file, unrelated to format.
     */
    public List<List<DataObj>> readDirectory(File theDir, String extension)	throws IllegalArgumentException, FileNotFoundException, IOException;
    /**
     * Write data on one or more tracks to an evaluation file. Supports both list file
     * writer types and file-per-track writer types.
     * 
     * @param theFile The file to be written .
     * @param data A <code>List</code> of one or more <code>DataObj<code> Objects encoding the 
     * evaluation data write to the File.
     * @throws IllegalArgumentException Thrown if the <code>DataObj</code> instances don't
     * contain the expected data..
     * @throws FileNotFOundException Thrown if the file cannot be created.
     * @throws IOException Thrown if there is a problem writing the file, unrelated to 
     * the input data.
     */
    public void writeFile(File theFile, List<DataObj> data) throws IllegalArgumentException, FileNotFoundException, IOException;
    
    /**
     * Set the logger to use for console output. If not set the default logger should be used, i.e.
     * the fully qualified name of the implementing class given by <code>this.getClass().getName()</code>.
     * @param logger The logger to use for output.
     */
    public void setLogger(Logger logger);
    
    /**
     * Returns the logger in use. Can be used to change the logging verbosity 
     * level with:
     * getLogger.setLevel(Level.WARNING).
     * @return the Logger that will be used for console output.
     */
    public Logger getLogger();
    
}
