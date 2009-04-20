/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package org.imirsel.m2k.evaluation2.tagsClassification;

import org.imirsel.m2k.evaluation2.tagsClassification.TagClassificationBinaryFileReader;
import org.imirsel.m2k.evaluation2.*;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author kris
 */
public class TagClassificationAffinityFileReader implements EvalFileReader {
    private boolean verbose = true;
    private boolean MIREX_submissionMode = false;
    public boolean getMIREX_submissionMode() {
        return MIREX_submissionMode;
    }

    public void setMIREX_submissionMode(boolean mirexMode) {
        this.MIREX_submissionMode = mirexMode;
    }
    
    private static final HashSet<String> ACCEPTED_FILE_EXTENSIONS = new HashSet<String>();
    static{
        ACCEPTED_FILE_EXTENSIONS.add(".mp3");
        ACCEPTED_FILE_EXTENSIONS.add(".wav");
        ACCEPTED_FILE_EXTENSIONS.add(".mid");
    }

    private static final int FILE_FORMAT_ERROR_TOLERANCE = 2;
    
    public boolean getVerbose() {
        return verbose;
    }

    public void setVerbose(boolean verbose_) {
        verbose = verbose_;
    }

    private void addToHash(HashMap<String,HashMap<String,Double>> pathsToRelevantTags, String path, String tag, double value){
        if(verbose){
            System.out.println("   appending tag: " + tag + ", affinity: " + value + " to path: " + path);
        }
        String key,ext;
        if (MIREX_submissionMode){
            key = new File(path).getName();
            for (Iterator<String> it = ACCEPTED_FILE_EXTENSIONS.iterator(); it.hasNext();) {
                ext = it.next();
                if(key.endsWith(ext)){
                    key = key.replaceAll(ext, "");
                    break;
                }
            }
        }else{
            key = path;
        }
        if (pathsToRelevantTags.containsKey(key)){
            HashMap<String,Double> tagMap = pathsToRelevantTags.get(key);
            tagMap.put(tag,value);
        }else{
            HashMap<String,Double> tagMap = new HashMap<String,Double>();
            tagMap.put(tag,value);
            pathsToRelevantTags.put(key, tagMap);
        }
    }
    
    public EvaluationDataObject readFile(File theFile) {
        if(verbose){
            System.out.println("Reading affinity file: " + theFile.getAbsolutePath());
        }
        
        //init file path as evaluation file
        EvaluationDataObject output = new EvaluationDataObject(theFile.getAbsolutePath());
        BufferedReader textBuffer = null;
        try {
            textBuffer = new BufferedReader(new FileReader(theFile));

            int errorCount = 0;
            
            HashMap<String,HashMap<String,Double>> pathsToRelevantTags = new HashMap<String,HashMap<String,Double>>();
            String line = textBuffer.readLine();
            String[] lineComps;
            int lineNum = 0;
            while (line != null){
                lineNum++;
                line = line.trim();
                if (!line.equals("")){
                    lineComps = line.split("\t");
                    if (lineComps.length < 3){
                        System.out.println("short line found, line: " + lineNum + ", file: " + theFile.getAbsolutePath());
                        errorCount++;
                        if (errorCount <= FILE_FORMAT_ERROR_TOLERANCE){
                            System.out.println("ignoring line " + lineNum);
                        }else{
                            throw new RuntimeException("Too many file format errors!\n" +
                                    "check if file is correctly deliminated with tabs (rather than other whitespace characters or commas) and has no preamble");
                        }
                    }else{
                        //assume there are 3 components
                        addToHash(pathsToRelevantTags,lineComps[0].trim(),lineComps[1].trim(),Double.parseDouble(lineComps[2]));
                    }
                }else{
                    System.out.println("empty line ignored, line: " + lineNum + ", file: " + theFile.getAbsolutePath());
                }
                line = textBuffer.readLine();
            }
            
            //append data to the EvaluationDataObject Object
            if(verbose){
                System.out.println("   appending relevant tags for " + pathsToRelevantTags.size() + " paths");
            }
            output.setMetadata(EvaluationDataObject.TAG_AFFINITY_MAP, pathsToRelevantTags);
        } catch (IOException ex) {
            throw new RuntimeException("IOExcecption occured while reading file: " + theFile.getAbsolutePath(), ex);
        } finally {
            try {
                textBuffer.close();
            } catch (IOException ex) {
                Logger.getLogger(TagClassificationBinaryFileReader.class.getName()).log(Level.SEVERE, null, ex);
            }
        }

        if(verbose){
            System.out.println("Done reading affinity file: " + theFile.getAbsolutePath());
        }
        return output;
    }

}