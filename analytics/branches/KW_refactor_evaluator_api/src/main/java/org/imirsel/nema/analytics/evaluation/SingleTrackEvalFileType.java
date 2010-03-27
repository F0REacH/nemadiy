/*
 * EvalFileType.java
 *
 * Created on 23 October 2006, 22:21
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package org.imirsel.nema.analytics.evaluation;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.logging.Handler;
import java.util.logging.Logger;

import org.imirsel.nema.model.NemaData;

/**
 * Interface defining the methods of classes to read and write evaluation/prediction data files.
 * 
 * @author kris.west@gmail.com
 */
public interface SingleTrackEvalFileType extends EvalFileType{
    
    /**
     * Read data on one track from an evaluation file. 
     * 
     * @param theFile The file encoding the evaluation data on one track.
     * @return A <code>NemaData<code> Object encoding the 
     * evaluation data read.
     * @throws IllegalArgumentException Thrown if the file is not in the expected format.
     * @throws FileNotFOundException Thrown if the file didn't exist or couldn't be read.
     * @throws IOException Thrown if there is a problem reading the file, unrelated to format.
     */
    public NemaData readFile(File theFile) throws IllegalArgumentException, FileNotFoundException, IOException;
    
    /**
     * Parse a directory of data files and read data on one track from each file. 
     * If non-null a filename extension is used to filter the files read. Supports both list 
     * file reader types and file-per-track reader types. 
     * @param theDir The directory to search for evaluation files.
     * @param extension If non-null files read must have this extension at the end of their
     * names.
     * @return A <code>List</code> of one or more <code>NemaData<code> 
     * Objects encoding the evaluation data read.
     * @throws IllegalArgumentException Thrown if a file is not in the expected format.
     * @throws FileNotFOundException Thrown if the directory didn't exist or couldn't be read.
     * @throws IOException Thrown if there is a problem reading a file, unrelated to format.
     */
    public List<NemaData> readDirectory(File theDir, String extension)	throws IllegalArgumentException, FileNotFoundException, IOException;
    
    /**
     * Write data on one track to an evaluation file. 
     * 
     * @param theFile The file to be written .
     * @param data A <code>NemaData<code> Object encoding the 
     * evaluation data write to the File.
     * @throws IllegalArgumentException Thrown if the <code>NemaData</code> instances don't
     * contain the expected data..
     * @throws FileNotFOundException Thrown if the file cannot be created.
     * @throws IOException Thrown if there is a problem writing the file, unrelated to 
     * the input data.
     */
    public void writeFile(File theFile, NemaData data) throws IllegalArgumentException, FileNotFoundException, IOException;
}