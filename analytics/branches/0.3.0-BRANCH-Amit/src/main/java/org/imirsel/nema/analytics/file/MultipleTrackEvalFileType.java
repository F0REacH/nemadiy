/*
 * NemaFileType.java
 *
 * Created on 23 October 2006, 22:21
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package org.imirsel.nema.analytics.file;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import org.imirsel.nema.model.NemaData;

/**
 * Interface defining the methods of classes to read and write 
 * evaluation/prediction data files where the files contain information on
 * multiple tracks per file.
 * 
 * @author kris.west@gmail.com
 * @since 0.1.0
 */
public interface MultipleTrackEvalFileType extends NemaFileType {
    
    /**
     * Read data on one or more tracks from an evaluation file. Supports both list file
     * reader types and file-per-track reader types.
     * 
     * @param theFile The file encoding the evaluation data on one or more tracks  tracks.
     * @return A <code>List</code> of one or more <code>NemaData<code> Objects encoding the 
     * evaluation data read.
     * @throws IllegalArgumentException Thrown if the file is not in the expected format.
     * @throws FileNotFOundException Thrown if the file didn't exist or couldn't be read.
     * @throws IOException Thrown if there is a problem reading the file, unrelated to format.
     */
    public List<NemaData> readFile(File theFile) throws IllegalArgumentException, FileNotFoundException, IOException;
    
    /**
     * Parse a directory of data files and read data on one or more tracks from each file. 
     * If non-null a filename extension is used to filter the files read. Supports both list 
     * file reader types and file-per-track reader types. 
     * @param theDir The directory to search for evaluation files.
     * @param extension If non-null files read must have this extension at the end of their
     * names.
     * @return A <code>List</code> of <code>List</code>s of one or more <code>NemaData<code> 
     * Objects encoding the evaluation data read.
     * @throws IllegalArgumentException Thrown if a file is not in the expected format.
     * @throws FileNotFOundException Thrown if the directory didn't exist or couldn't be read.
     * @throws IOException Thrown if there is a problem reading a file, unrelated to format.
     */
    public List<List<NemaData>> readDirectory(File theDir, String extension)	throws IllegalArgumentException, FileNotFoundException, IOException;
    
    /**
     * Write data on one or more tracks to an evaluation file. Supports both list file
     * writer types and file-per-track writer types.
     * 
     * @param theFile The file to be written .
     * @param data A <code>List</code> of one or more <code>NemaData<code> Objects encoding the 
     * evaluation data write to the File.
     * @throws IllegalArgumentException Thrown if the <code>NemaData</code> instances don't
     * contain the expected data..
     * @throws FileNotFOundException Thrown if the file cannot be created.
     * @throws IOException Thrown if there is a problem writing the file, unrelated to 
     * the input data.
     */
    public void writeFile(File theFile, List<NemaData> data) throws IllegalArgumentException, FileNotFoundException, IOException;
}
