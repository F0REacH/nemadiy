/**
 * 
 */
package org.imirsel.nema.analytics.evaluation;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.logging.Handler;
import java.util.logging.Logger;
import java.util.logging.StreamHandler;

import org.imirsel.nema.analytics.logging.AnalyticsLogFormatter;
import org.imirsel.nema.analytics.logging.ProcessExecutorLogFormatter;
import org.imirsel.nema.model.NemaData;
import org.imirsel.nema.model.NemaDataConstants;
import org.imirsel.nema.model.NemaDataset;
import org.imirsel.nema.model.NemaTask;

/**
 * @author kris.west@gmail.com
 *
 */
public abstract class EvaluatorImpl implements Evaluator {

	protected Logger _logger;
	protected File workingDir;
	protected File outputDir;
	protected Map<String,NemaData> trackIDToGT;
	protected Map<String,List<List<NemaData>>> jobIDToFoldResults;
	protected Map<String,String> jobIDToName;
	protected NemaTask task;
	protected NemaDataset dataset;
	
	
	public EvaluatorImpl(File workingDir_, File outputDir_)  throws FileNotFoundException{
		_logger = Logger.getLogger(this.getClass().getName());
		
		setWorkingDir(workingDir_);
		setOutputDir(outputDir_);
		
		trackIDToGT = new HashMap<String,NemaData>();
		jobIDToFoldResults = new HashMap<String,List<List<NemaData>>>();
		jobIDToName = new HashMap<String,String>();
		task = null;
		dataset = null;
	}
	
	public EvaluatorImpl(File workingDir_, File outputDir_, 
			NemaTask task_, NemaDataset dataset_)  throws FileNotFoundException{
		_logger = Logger.getLogger(this.getClass().getName());
		
		setWorkingDir(workingDir_);
		setOutputDir(outputDir_);
		
		trackIDToGT = new HashMap<String,NemaData>();
		jobIDToFoldResults = new HashMap<String,List<List<NemaData>>>();
		jobIDToName = new HashMap<String,String>();
		task = task_;
		dataset = dataset_;
	}
	
	public Logger getLogger() {
		if (_logger == null){
			_logger = Logger.getLogger(this.getClass().getName());
		}
		return _logger;
	}

	public void addLogDestination(PrintStream stream) {
		Handler handler = new StreamHandler(stream, new AnalyticsLogFormatter());
		getLogger().addHandler(handler);
	}

	public void setOutputDir(File outputDir_) throws FileNotFoundException {
		outputDir = outputDir_;
		outputDir.mkdirs();
		if (!outputDir.exists()){
			throw new FileNotFoundException("Output directory " + outputDir.getAbsolutePath() + " was not found and could not be created!");
		}
	}

	public void setWorkingDir(File workingDir_) throws FileNotFoundException {
		workingDir = workingDir_;
		workingDir.mkdirs();
		if (!workingDir.exists()){
			throw new FileNotFoundException("Working directory " + workingDir.getAbsolutePath() + " was not found and could not be created!");
		}
	}
	
	public void addResults(String systemName, String jobID, List<NemaData> results) {
		jobIDToName.put(jobID, systemName);
		List<List<NemaData>> resultList = jobIDToFoldResults.get(jobID);
		if (resultList == null){
			resultList = new ArrayList<List<NemaData>>(5);
			jobIDToFoldResults.put(jobID, resultList);
		}
		resultList.add(results);
	}
	

	public void setGroundTruth(List<NemaData> groundtruth) {
		NemaData data;
		for(Iterator<NemaData> it = groundtruth.iterator(); it.hasNext();){
			data = it.next();
			trackIDToGT.put(data.getId(), data);
		}		
		_logger.info("Received groundtruth for " + groundtruth.size() + " track IDs");
	}
	
	public NemaData getGroundTruth(String trackID){
		return trackIDToGT.get(trackID);
	}

	public void setTask(NemaTask task) {
		this.task = task;
	}
	
	public void setDataset(NemaDataset dataset) {
		this.dataset = dataset;
	}
	
	public NemaTask getTask() {
		return task;
	}
	
	public NemaDataset getDataset() {
		return dataset;
	}

	public abstract Map<String,NemaData> evaluate() throws IllegalArgumentException, IOException;

}