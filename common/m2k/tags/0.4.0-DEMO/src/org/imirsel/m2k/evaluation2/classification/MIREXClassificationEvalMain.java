/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package org.imirsel.m2k.evaluation2.classification;

import java.io.BufferedWriter;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.imirsel.m2k.evaluation2.tagsClassification.*;
import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import org.imirsel.m2k.evaluation2.resultPages.FileListItem;
import org.imirsel.m2k.evaluation2.resultPages.ImageItem;
import org.imirsel.m2k.evaluation2.resultPages.Page;
import org.imirsel.m2k.evaluation2.resultPages.PageItem;
import org.imirsel.m2k.evaluation2.resultPages.ResultPageUtilities;
import org.imirsel.m2k.evaluation2.resultPages.TableItem;
import org.imirsel.m2k.io.file.CopyFileFromClassPathToDisk;
import org.imirsel.m2k.io.file.IOUtil;
import org.imirsel.m2k.util.MatlabCommandlineIntegrationClass;
import org.imirsel.m2k.util.Signal;
import org.imirsel.m2k.util.noMetadataException;

/**
 *
 * @author kris
 */
public class MIREXClassificationEvalMain {

    private boolean performMatlabStatSigTests = true;
    private String matlabPath = "matlab";
    private String evaluationName;
    private File gtFile;
    private File rootEvaluationDir;
    private File hierarchyFile = null;
    private List<String> systemNames;
    private List<File> resultsDirs;

    public static final String EVAL_SIGNAL_EXT = ".evalData.ser";
    public static final String EVAL_REPORT_EXT = ".eval.txt";

    public MIREXClassificationEvalMain(boolean performMatlabStatSigTests_,
            String matlabPath_,
            String evaluationName_,
            File gtFile_,
            File rootEvaluationDir_,
            File hierarchyFile_,
            List<String> systemNames_,
            List<File> resultsDirs_){
        
        performMatlabStatSigTests = performMatlabStatSigTests_;
        matlabPath = matlabPath_;
        evaluationName = evaluationName_;
        gtFile = gtFile_;
        rootEvaluationDir = rootEvaluationDir_;
        hierarchyFile = hierarchyFile_;
        systemNames = systemNames_;
        resultsDirs = resultsDirs_;
    }
    
    public MIREXClassificationEvalMain(){
        
    }
    
    public void parseCommandLineArgs(String[] args){
        if (args.length < 5){
            System.err.println("ERROR: Insufficient arguments!\n" + USAGE);
            System.exit(1);
        }
        
        evaluationName = args[0];
        System.out.println("Evaluation name:   " + evaluationName);
        gtFile = new File(args[1]);
        System.out.println("Ground-truth file: " + gtFile.getAbsolutePath());
        rootEvaluationDir = new File(args[2]);
        System.out.println("Root eval dir:     " + rootEvaluationDir.getAbsolutePath());
        rootEvaluationDir.mkdirs();
        if (args.length % 2 != 1){
            System.err.println("WARNING: an even number of arguments was specified, one may have been ignored!\n" + USAGE);
        }
        
        systemNames = new ArrayList<String>();
        resultsDirs = new ArrayList<File>();
        
        int startIdx = -1;
        if (args[3].equalsIgnoreCase("-h")){
            hierarchyFile = new File(args[4]);
            System.out.println("Hierarchy file:    " + hierarchyFile.getAbsolutePath());
            startIdx = 5;
        }else{
            startIdx = 3;
            System.out.println("Hierarchy file:    <None specified>");
            hierarchyFile = null;
        }


        System.out.println("---");
        for (int i = startIdx; i < args.length; i+=2) {
            String systemName = args[i+1];
            File resultsPath = new File(args[i]);
            systemNames.add(systemName);
            resultsDirs.add(resultsPath);
            System.out.println("System " + systemNames.size()+ "; " + systemName + ", " + resultsPath.getAbsolutePath());
        }
        System.out.println("---");
    }
    
    public static final String USAGE = "args: evaluationName /path/to/GT/file /path/to/output/dir [-h /path/to/hierarchy/file] /path/to/system1/results/dir system1Name ... /path/to/systemN/results/dir systemNName";
    public static void main(String[] args) {
        
        System.err.println("MIREX 2008 Classification evaluator\n" +
                "\t\tby Kris West (kris.west@gmail.com");
        System.err.println("");
        
        MIREXClassificationEvalMain eval = new MIREXClassificationEvalMain();
        eval.parseCommandLineArgs(args);
        
        eval.performEvaluation();
        
        System.err.println("---exit---");
        
    }
    
    public void performEvaluation() {

        boolean performStatSigTests = true;
        if(systemNames.size() < 2){
            performStatSigTests = false;
        }

        //get each directory of results
        System.err.println("Determining location of results files for each system for each experiment fold...");
        ArrayList<ArrayList<File>> resultsFilesPerSystemPerFold = new ArrayList<ArrayList<File>>();
        
        int numFolds = -1;
        for (Iterator<File> it = resultsDirs.iterator(); it.hasNext();) {
            File dir = it.next();
            System.out.println("\tretrieving files for " + dir.getAbsolutePath());
            File[] files = dir.listFiles();
            ArrayList<File> filesToUse = new ArrayList<File>();

            System.out.println("\t\tgot " + files.length + " files");

            for (int i = 0; i < files.length; i++){
                File file = files[i];
                if (!file.isDirectory()){
                    filesToUse.add(file);
                }
            }

            files = filesToUse.toArray(new File[filesToUse.size()]);

            //this should sort results consistenly across all submissions,
            //   if they use the same names for their results files 
            //   (otherwise there is no way to know if they are about the same test across different submissions)
            Arrays.sort(files);
            ArrayList<File> resultFiles = new ArrayList<File>();

            for (int i = 0; i < files.length; i++) {
                resultFiles.add(files[i]);
            }
            resultsFilesPerSystemPerFold.add(resultFiles);

            //check that all systems have the same number of results
            if (numFolds == -1) {
                numFolds = resultFiles.size();
            } else if (numFolds != resultFiles.size()) {
                System.err.println("ERROR: The number of folds (" + resultFiles.size() + ") detected " + "in directory: " + dir.getAbsolutePath() + " for result files is not equal to the number detected " + "for the preceeding systems (" + numFolds + ")!");
                System.exit(1);
            }
        }

        System.err.println("reading result data files...");
        //read each binary result file and create EvaluationDataObject arrays
        Signal[][][] resultData = new Signal[systemNames.size()][numFolds][];
        for (int i = 0; i < systemNames.size(); i++) {
            System.err.println("\treading " + systemNames.get(i));
            ArrayList<File> fileList = resultsFilesPerSystemPerFold.get(i);
            for (int j = 0; j < numFolds; j++) {
                resultData[i][j] = ClassificationResultReadClass.readClassificationFileAsSignals(fileList.get(j), gtFile,true);
            }
        }

        System.err.println("Performing individual classification evals...");
        //run SignalArrayAccuracyClass2 on each system
        File[] resultFiles = new File[resultData.length];
        File[] systemDirs = new File[resultData.length];
        ArrayList<Signal[]> resultSignals = new ArrayList<Signal[]>(resultData.length);
        for (int i = 0; i < resultData.length; i++) {
            System.out.println("\tevaluating " + systemNames.get(i));
            systemDirs[i] = new File(rootEvaluationDir.getAbsolutePath() + File.separator + systemNames.get(i));
            systemDirs[i].mkdirs();
            SignalArrayAccuracyClass2 evaluator = null;
            if(hierarchyFile == null){
                evaluator = new SignalArrayAccuracyClass2(systemNames.get(i), EVAL_REPORT_EXT, EVAL_SIGNAL_EXT, systemDirs[i].getAbsolutePath(), null, true);
            }else{
                evaluator = new SignalArrayAccuracyClass2(systemNames.get(i), EVAL_REPORT_EXT, EVAL_SIGNAL_EXT, systemDirs[i].getAbsolutePath(), hierarchyFile.getAbsolutePath(), true);
            }
            Signal[] resultSignalArr = null;
            for (int j = 0; j < numFolds; j++) {
                try {
                    resultSignalArr = evaluator.evaluate(resultData[i][j]);
                } catch (IllegalArgumentException ex) {
                    Logger.getLogger(MIREXClassificationEvalMain.class.getName()).log(Level.SEVERE, null, ex);
                } catch (IOException ex) {
                    Logger.getLogger(MIREXClassificationEvalMain.class.getName()).log(Level.SEVERE, null, ex);
                } catch (noMetadataException ex) {
                    Logger.getLogger(MIREXClassificationEvalMain.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
            resultSignals.add(resultSignalArr);
            resultFiles[i] = evaluator.getReportFile();
        }


        //plot confusion matrices
        System.err.println("Plotting overall confusion matrices...");
        File[] confusionFiles = new File[resultData.length];
        for (int i = 0; i < resultFiles.length; i++) {
            try {
                confusionFiles[i] = new File(resultFiles[i].getAbsolutePath() + ".conf.png");
                ParseAndPlotConfusionMatrix.loadPlotAndSaveConfusion(resultFiles[i], confusionFiles[i]);
            } catch (IOException ex) {
                Logger.getLogger(MIREXClassificationEvalMain.class.getName()).log(Level.SEVERE, null, ex);
            }
        }


        System.err.println("Writing out CSV result files over whole task...");
        //prep result test data CSV file over classes and folds
        File perClassCSV = WriteResultFilesClass.prepFriedmanTestDataOverClassesCSV(resultSignals, rootEvaluationDir.getAbsolutePath(), evaluationName, Signal.PROP_PERF_ACC_PER_CLASS, ".csv", true);

        //prep result test data CSV file over folds only
        File perFoldCSV = WriteResultFilesClass.prepFriedmanTestDataCSV(resultSignals, rootEvaluationDir.getAbsolutePath(), evaluationName, Signal.PROP_PERF_ACC, ".csv", true);

        File discountedPerClassCSV = null;
        File discountedPerFoldCSV = null;

        if (hierarchyFile != null){
            discountedPerClassCSV = WriteResultFilesClass.prepFriedmanTestDataOverClassesCSV(resultSignals, rootEvaluationDir.getAbsolutePath(), evaluationName, Signal.PROP_PERF_DISCOUNTED_ACC_PER_CLASS, ".csv", true);
            discountedPerFoldCSV = WriteResultFilesClass.prepFriedmanTestDataCSV(resultSignals, rootEvaluationDir.getAbsolutePath(), evaluationName, Signal.PROP_PERF_DISCOUNTED_ACC, ".csv", true);
        }

        //write out results summary
        File summaryCSV = WriteResultFilesClass.prepSummaryResultDataCSV(resultSignals, rootEvaluationDir.getAbsolutePath(), evaluationName, ".csv", hierarchyFile != null, true);


        //run friedman test if matlab available?
        File friedmanClassTablePNG = null;
        File friedmanClassTable = null;
        File friedmanFoldTablePNG = null;
        File friedmanFoldTable = null;
        File friedmanDiscountClassTablePNG = null;
        File friedmanDiscountClassTable = null;
        File friedmanDiscountFoldTablePNG = null;
        File friedmanDiscountFoldTable = null;
        if (getPerformMatlabStatSigTests() && performStatSigTests){
            System.err.println("Performing Friedman's tests in Matlab...");
            String[] systemNamesArr = systemNames.toArray(new String[systemNames.size()]);
            
            File[] tmp = performFriedmanTestWithClassAccuracy(rootEvaluationDir, perClassCSV, systemNamesArr);
            friedmanClassTablePNG = tmp[0];
            friedmanClassTable = tmp[1];

            tmp = performFriedmanTestWithFoldAccuracy(rootEvaluationDir, perFoldCSV, systemNamesArr);
            friedmanFoldTablePNG = tmp[0];
            friedmanFoldTable = tmp[1];

            if (hierarchyFile != null){
                tmp = performFriedmanTestWithClassAccuracy(rootEvaluationDir, discountedPerClassCSV, systemNamesArr);
                friedmanDiscountClassTablePNG = tmp[0];
                friedmanDiscountClassTable = tmp[1];
                
                tmp = performFriedmanTestWithFoldAccuracy(rootEvaluationDir, discountedPerFoldCSV, systemNamesArr);
                friedmanDiscountFoldTablePNG = tmp[0];
                friedmanDiscountFoldTable = tmp[1];
            }
        }

        //create tarballs of individual result dirs
        System.err.println("Preparing evaluation data tarballs...");
        File[] tgzFiles = new File[resultData.length];
        for (int i = 0; i < resultData.length; i++) {
            tgzFiles[i] = IOUtil.tarAndGzip(systemDirs[i],new String[]{EVAL_SIGNAL_EXT});
            System.out.println("done " + systemDirs[i] + " -> " + tgzFiles[i]);
        }

        //create result pages
        System.err.println("Creating result HTML files...");

        List<Page> resultPages = new ArrayList<Page>();
        List<PageItem> items;
        Page aPage;


        //do summary page
        {
        items = new ArrayList<PageItem>();
        WriteResultFilesClass.Table summaryTable = WriteResultFilesClass.prepSummaryTable(resultSignals, rootEvaluationDir.getAbsolutePath(), evaluationName, ".csv", hierarchyFile != null, true);
        items.add(new TableItem("summary_results", "Summary Results", summaryTable.getColHeaders(), summaryTable.getRows()));
        aPage = new Page("summary", "Summary", items, false);
        resultPages.add(aPage);
        }

        //do per class page
        {
            items = new ArrayList<PageItem>();
            WriteResultFilesClass.Table perClassTable = WriteResultFilesClass.prepTableDataOverClasses(resultSignals, rootEvaluationDir.getAbsolutePath(), evaluationName, Signal.PROP_PERF_ACC_PER_CLASS, ".csv", true);
            items.add(new TableItem("acc_class", "Accuracy per Class", perClassTable.getColHeaders(), perClassTable.getRows()));
            if (hierarchyFile != null){
                WriteResultFilesClass.Table perDiscClassTable = WriteResultFilesClass.prepTableDataOverClasses(resultSignals, rootEvaluationDir.getAbsolutePath(), evaluationName, Signal.PROP_PERF_DISCOUNTED_ACC_PER_CLASS, ".csv", true);
                items.add(new TableItem("disc_acc_class", "Discounted Accuracy per Class", perDiscClassTable.getColHeaders(), perDiscClassTable.getRows()));
            }
            aPage = new Page("acc_per_class", "Accuracy per Class", items, false);
            resultPages.add(aPage);
        }

        //do per fold page
        {
            items = new ArrayList<PageItem>();
            WriteResultFilesClass.Table perFoldTable = WriteResultFilesClass.prepTableData(resultSignals, rootEvaluationDir.getAbsolutePath(), evaluationName, Signal.PROP_PERF_ACC, ".csv", true);
            items.add(new TableItem("acc_class", "Accuracy per Fold", perFoldTable.getColHeaders(), perFoldTable.getRows()));
            if (hierarchyFile != null){
                WriteResultFilesClass.Table perDiscFoldTable = WriteResultFilesClass.prepTableData(resultSignals, rootEvaluationDir.getAbsolutePath(), evaluationName, Signal.PROP_PERF_DISCOUNTED_ACC, ".csv", true);
                items.add(new TableItem("disc_acc_class", "Discounted Accuracy per Fold", perDiscFoldTable.getColHeaders(), perDiscFoldTable.getRows()));
            }
            aPage = new Page("acc_per_fold", "Accuracy per Fold", items, false);
            resultPages.add(aPage);
        }
        
        //do significance tests
        if (getPerformMatlabStatSigTests() && performStatSigTests){
            items = new ArrayList<PageItem>();
            items.add(new ImageItem("friedmanClassTablePNG", "Accuracy Per Class: Friedman's ANOVA w/ Tukey Kramer HSD", IOUtil.makeRelative(friedmanClassTablePNG, rootEvaluationDir)));
            items.add(new ImageItem("friedmanFoldTablePNG", "Accuracy Per Fold: Friedman's ANOVA w/ Tukey Kramer HSD", IOUtil.makeRelative(friedmanFoldTablePNG, rootEvaluationDir)));
            if(friedmanDiscountClassTable != null){
                items.add(new ImageItem("friedmanDiscountClassTablePNG", "Discounted Accuracy Per Class: Friedman's ANOVA w/ Tukey Kramer HSD", IOUtil.makeRelative(friedmanDiscountClassTablePNG, rootEvaluationDir)));
            }
            if(friedmanDiscountFoldTable != null){
                items.add(new ImageItem("friedmanDiscountFoldTablePNG", "Accuracy Per Fold: Friedman's ANOVA w/ Tukey Kramer HSD", IOUtil.makeRelative(friedmanDiscountFoldTablePNG, rootEvaluationDir)));
            }
            aPage = new Page("sig_tests", "Significance Tests", items, true);
            resultPages.add(aPage);
        }

        //do confusion matrices
        {
            items = new ArrayList<PageItem>();
            for (int i = 0; i < confusionFiles.length; i++){
                items.add(new ImageItem("confusion_" + i, systemNames.get(i), IOUtil.makeRelative(confusionFiles[i], rootEvaluationDir)));
            }
            aPage = new Page("confusion", "Confusion Matrices", items, true);
            resultPages.add(aPage);
        }

        //do files page
        {
            items = new ArrayList<PageItem>();

            //CSVs
            List<String> CSVPaths = new ArrayList<String>(4);
            CSVPaths.add(IOUtil.makeRelative(perClassCSV,rootEvaluationDir));
            CSVPaths.add(IOUtil.makeRelative(perFoldCSV,rootEvaluationDir));
            if (hierarchyFile != null){
                CSVPaths.add(IOUtil.makeRelative(discountedPerClassCSV,rootEvaluationDir));
                CSVPaths.add(IOUtil.makeRelative(discountedPerFoldCSV,rootEvaluationDir));
            }
            items.add(new FileListItem("dataCSVs", "CSV result files", CSVPaths));

            //Friedman's tables and plots
            if (getPerformMatlabStatSigTests() && performStatSigTests){
                //Friedmans tables
                List<String> sigCSVPaths = new ArrayList<String>(4);
                sigCSVPaths.add(IOUtil.makeRelative(friedmanClassTable, rootEvaluationDir));
                sigCSVPaths.add(IOUtil.makeRelative(friedmanFoldTable, rootEvaluationDir));
                if(friedmanDiscountClassTable != null){
                    sigCSVPaths.add(IOUtil.makeRelative(friedmanDiscountClassTable, rootEvaluationDir));
                }
                if(friedmanDiscountFoldTable != null){
                    sigCSVPaths.add(IOUtil.makeRelative(friedmanDiscountFoldTable, rootEvaluationDir));
                }
                items.add(new FileListItem("sigCSVs", "Significance test CSVs", sigCSVPaths));

                //Friedmans plots
                List<String> sigPNGPaths = new ArrayList<String>(4);
                sigPNGPaths.add(IOUtil.makeRelative(friedmanClassTablePNG, rootEvaluationDir));
                sigPNGPaths.add(IOUtil.makeRelative(friedmanFoldTablePNG, rootEvaluationDir));
                if(friedmanDiscountClassTable != null){
                    sigPNGPaths.add(IOUtil.makeRelative(friedmanDiscountClassTablePNG, rootEvaluationDir));
                }
                if(friedmanDiscountFoldTable != null){
                    sigPNGPaths.add(IOUtil.makeRelative(friedmanDiscountFoldTablePNG, rootEvaluationDir));
                }
                items.add(new FileListItem("sigPNGs", "Significance test plots", sigPNGPaths));
            }

            //System Tarballs
            List<String> tarballPaths = new ArrayList<String>(4);
            for (int i = 0; i < tgzFiles.length; i++){
                tarballPaths.add(IOUtil.makeRelative(tgzFiles[i],rootEvaluationDir));
            }
            items.add(new FileListItem("tarballs", "Per algorithm evaluation tarball", tarballPaths));
            aPage = new Page("files", "Raw data files", items, true);
            resultPages.add(aPage);
        }

        ResultPageUtilities.writeResultPages(evaluationName, rootEvaluationDir, resultPages);
    }


    
    private File[] performFriedmanTestWithClassAccuracy(File outputDir, File CSVResultFile, String[] systemNames) {
        //make sure readtext is in the working directory for matlab
        File readtextMFile = new File(outputDir.getAbsolutePath() + File.separator + "readtext.m");
        CopyFileFromClassPathToDisk.copy("/org/imirsel/m2k/evaluation2/tagsClassification/resources/readtext.m", readtextMFile);
        
        //create an m-file to run the test
        String evalCommand = "performFriedmanForClassAccuracy";
        String name = CSVResultFile.getName().replaceAll(".csv", "");
        File tempMFile = new File(outputDir.getAbsolutePath() + File.separator + evalCommand + ".m");
        String matlabPlotPath = outputDir.getAbsolutePath() + File.separator + name + ".friedman.tukeyKramerHSD.png";
        String matlabPlotRelPath = "." + File.separator + name + ".friedman.tukeyKramerHSD.png";
        String friedmanTablePath = outputDir.getAbsolutePath() + File.separator + name + ".friedman.tukeyKramerHSD.csv";
        try {
            BufferedWriter textOut = new BufferedWriter(new FileWriter(tempMFile));

//            textOut.write("[data, result] = readtext('" + CSVResultFile.getAbsolutePath() + "', ',');");
//            textOut.newLine();
//            textOut.write("algNames = data(1,2:" + (systemNames.length + 1) + ")';");
//            textOut.newLine();
//            textOut.write("[length,width] = size(data);");
//            textOut.newLine();
//            textOut.write("Acc_Scores = cell2mat(data(2:length,2:" + (systemNames.length + 1) + "));");
//            textOut.newLine();
//            textOut.write("[P,friedmanTable,friedmanStats] = friedman(Acc_Scores,1,'on');");
//            textOut.newLine();
//            textOut.write("[c,m,fig,gnames] = multcompare(friedmanStats, 'ctype', 'tukey-kramer','estimate', 'friedman', 'alpha', 0.05);");
//            textOut.newLine();
//            textOut.write("saveas(fig,'" + matlabPlotPath + "');");
//            textOut.newLine();
//            textOut.write("exit;");
//            textOut.newLine();
            
            
            textOut.write("[data, result] = readtext('" + CSVResultFile.getAbsolutePath() + "', ',');");
            textOut.newLine();
            textOut.write("algNames = data(1,2:" + (systemNames.length + 1) + ")';");
            textOut.newLine();
            textOut.write("[length,width] = size(data);");
            textOut.newLine();
            textOut.write("Acc_Scores = cell2mat(data(2:length,2:" + (systemNames.length + 1) + "));");
            textOut.newLine();
            textOut.write("[val sort_idx] = sort(mean(Acc_Scores));");
            textOut.newLine();
            textOut.write("[P,friedmanTable,friedmanStats] = friedman(Acc_Scores(:,fliplr(sort_idx)),1,'on'); close(gcf)");
            textOut.newLine();
            textOut.write("[c,m,h,gnames] = multcompare(friedmanStats, 'ctype', 'tukey-kramer','estimate', 'friedman', 'alpha', 0.05,'display','off');");
            textOut.newLine();
            textOut.write("fig = figure;");
            textOut.newLine();
            textOut.write("width = (-c(1,3)+c(1,5))/4;");
            textOut.newLine();
            textOut.write("set(fig,'paperunit','points')");
            textOut.newLine();
            textOut.write("set(fig,'paperposition',[1 500 1200 500])");
            textOut.newLine();
            textOut.write("set(fig,'papersize',[1200 500])");
            textOut.newLine();
            textOut.write("set(fig,'position',[1 500 1200 500])");
            textOut.newLine();
            textOut.write("plot(friedmanStats.meanranks,'ro'); hold on");
            textOut.newLine();
            textOut.write("for i=1:" + systemNames.length + ",");
            textOut.newLine();
            textOut.write("    plot([i i],[-width width]+friedmanStats.meanranks(i));");
            textOut.newLine();
            textOut.write("    plot([-0.1 .1]+i,[-width -width]+friedmanStats.meanranks(i))");
            textOut.newLine();
            textOut.write("    plot([-0.1 .1]+i,[+width +width]+friedmanStats.meanranks(i))");
            textOut.newLine();
            textOut.write("end");
            textOut.newLine();
            textOut.write("set(gca,'xtick',1:" + systemNames.length + ",'xlim',[0.5 " + systemNames.length + "+0.5])");
            textOut.newLine();
            textOut.write("set(gca,'xticklabel',algNames(fliplr(sort_idx)))");
            textOut.newLine();
            textOut.write("ylabel('Mean Column Ranks')");
            textOut.newLine();
            textOut.write("h = title('" + CSVResultFile.getAbsolutePath() + "')");
            textOut.newLine();
            textOut.write("set(h,'interpreter','none')");
            textOut.newLine();
            textOut.write("outerpos = get(gca,'outerposition');");
            textOut.newLine();
            textOut.write("tightinset = get(gca,'tightinset');");
            textOut.newLine();
            textOut.write("newpos = [tightinset(1) tightinset(2) outerpos(3)-(tightinset(1) + tightinset(3)) outerpos(4)-(tightinset(2) + tightinset(4))];");
            textOut.newLine();
            textOut.write("set(gca,'position',newpos);");
            textOut.newLine();
            textOut.write("saveas(fig,'" + matlabPlotRelPath + "');");
            textOut.newLine();
            textOut.write("fidFriedman=fopen('" + friedmanTablePath + "','w+');");
            textOut.newLine();
            textOut.write("fprintf(fidFriedman,'%s,%s,%s,%s,%s,%s\\n','*TeamID','TeamID','Lowerbound','Mean','Upperbound','Significance');");
            textOut.newLine();
            textOut.write("for i=1:size(c,1)");
            textOut.newLine();
            textOut.write("        if sign(c(i,3))*sign(c(i,5)) > 0");
            textOut.newLine();
            textOut.write("            tf='TRUE';");
            textOut.newLine();
            textOut.write("        else");
            textOut.newLine();
            textOut.write("            tf='FALSE';");
            textOut.newLine();
            textOut.write("        end");
            textOut.newLine();
            textOut.write("         fprintf(fidFriedman,'%s,%s,%6.4f,%6.4f,%6.4f,%s\\n',algNames{c(i,1)},algNames{c(i,2)},c(i,3),c(i,4),c(i,5),tf);");
            textOut.newLine();
            textOut.write("end");
            textOut.newLine();
            textOut.write("fclose(fidFriedman);");
            textOut.newLine();
            textOut.write("exit;");
            textOut.newLine();


            textOut.close();
        } catch (IOException ex) {
            Logger.getLogger(TagClassificationBinaryEvaluator.class.getName()).log(Level.SEVERE, null, ex);
        }

        MatlabCommandlineIntegrationClass matlabIntegrator = new MatlabCommandlineIntegrationClass();
        matlabIntegrator.setMatlabBin(getMatlabPath());
        matlabIntegrator.setCommandFormattingStr("");
        matlabIntegrator.setMainCommand(evalCommand);
        matlabIntegrator.setWorkingDir(outputDir.getAbsolutePath());
        matlabIntegrator.start();
        try {
            matlabIntegrator.join();
            //  call matlab and execute Beta-Binomial test
        } catch (InterruptedException ex) {
            Logger.getLogger(TagClassificationAffinityEvaluator.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new File[]{new File(matlabPlotPath),new File(friedmanTablePath)};
    }
    
    private File[] performFriedmanTestWithFoldAccuracy(File outputDir, File CSVResultFile, String[] systemNames) {
        //make sure readtext is in the working directory for matlab
        File readtextMFile = new File(outputDir.getAbsolutePath() + File.separator + "readtext.m");
        CopyFileFromClassPathToDisk.copy("/org/imirsel/m2k/evaluation2/tagsClassification/resources/readtext.m", readtextMFile);
        
        //create an m-file to run the test
        String evalCommand = "performFriedmanForFoldAccuracy";
        String name = CSVResultFile.getName().replaceAll(".csv", "");
        File tempMFile = new File(outputDir.getAbsolutePath() + File.separator + evalCommand + ".m");
        String matlabPlotPath = outputDir.getAbsolutePath() + File.separator + name + ".friedman.tukeyKramerHSD.png";
        String matlabPlotRelPath = "." + File.separator + name + ".friedman.tukeyKramerHSD.png";
        String friedmanTablePath = outputDir.getAbsolutePath() + File.separator + name + ".friedman.tukeyKramerHSD.csv";
        try {
            BufferedWriter textOut = new BufferedWriter(new FileWriter(tempMFile));

//            textOut.write("[data, result] = readtext('" + CSVResultFile.getAbsolutePath() + "', ',');");
//            textOut.newLine();
//            textOut.write("algNames = data(1,2:" + (systemNames.length + 1) + ")';");
//            textOut.newLine();
//            textOut.write("[length,width] = size(data);");
//            textOut.newLine();
//            textOut.write("Acc_Scores = cell2mat(data(2:length,2:" + (systemNames.length + 1) + "));");
//            textOut.newLine();
//            textOut.write("[P,friedmanTable,friedmanStats] = friedman(Acc_Scores,1,'on');");
//            textOut.newLine();
//            textOut.write("[c,m,fig,gnames] = multcompare(friedmanStats, 'ctype', 'tukey-kramer','estimate', 'friedman', 'alpha', 0.05);");
//            textOut.newLine();
//            textOut.write("saveas(fig,'" + matlabPlotPath + "');");
//            textOut.newLine();
//            textOut.write("exit;");
//            textOut.newLine();

            
            textOut.write("[data, result] = readtext('" + CSVResultFile.getAbsolutePath() + "', ',');");
            textOut.newLine();
            textOut.write("algNames = data(1,2:" + (systemNames.length + 1) + ")';");
            textOut.newLine();
            textOut.write("[length,width] = size(data);");
            textOut.newLine();
            textOut.write("Acc_Scores = cell2mat(data(2:length,2:" + (systemNames.length + 1) + "));");
            textOut.newLine();
            textOut.write("[val sort_idx] = sort(mean(Acc_Scores));");
            textOut.newLine();
            textOut.write("[P,friedmanTable,friedmanStats] = friedman(Acc_Scores(:,fliplr(sort_idx)),1,'on'); close(gcf)");
            textOut.newLine();
            textOut.write("[c,m,h,gnames] = multcompare(friedmanStats, 'ctype', 'tukey-kramer','estimate', 'friedman', 'alpha', 0.05,'display','off');");
            textOut.newLine();
            textOut.write("fig = figure;");
            textOut.newLine();
            textOut.write("width = (-c(1,3)+c(1,5))/4;");
            textOut.newLine();
            textOut.write("set(fig,'paperunit','points')");
            textOut.newLine();
            textOut.write("set(fig,'paperposition',[1 500 1200 500])");
            textOut.newLine();
            textOut.write("set(fig,'papersize',[1200 500])");
            textOut.newLine();
            textOut.write("set(fig,'position',[1 500 1200 500])");
            textOut.newLine();
            textOut.write("plot(friedmanStats.meanranks,'ro'); hold on");
            textOut.newLine();
            textOut.write("for i=1:" + systemNames.length + ",");
            textOut.newLine();
            textOut.write("    plot([i i],[-width width]+friedmanStats.meanranks(i));");
            textOut.newLine();
            textOut.write("    plot([-0.1 .1]+i,[-width -width]+friedmanStats.meanranks(i))");
            textOut.newLine();
            textOut.write("    plot([-0.1 .1]+i,[+width +width]+friedmanStats.meanranks(i))");
            textOut.newLine();
            textOut.write("end");
            textOut.newLine();
            textOut.write("set(gca,'xtick',1:" + systemNames.length + ",'xlim',[0.5 " + systemNames.length + "+0.5])");
            textOut.newLine();
            textOut.write("set(gca,'xticklabel',algNames(fliplr(sort_idx)))");
            textOut.newLine();
            textOut.write("ylabel('Mean Column Ranks')");
            textOut.newLine();
            textOut.write("h = title('" + CSVResultFile.getAbsolutePath() + "')");
            textOut.newLine();
            textOut.write("set(h,'interpreter','none')");
            textOut.newLine();
            textOut.write("outerpos = get(gca,'outerposition');");
            textOut.newLine();
            textOut.write("tightinset = get(gca,'tightinset');");
            textOut.newLine();
            textOut.write("newpos = [tightinset(1) tightinset(2) outerpos(3)-(tightinset(1) + tightinset(3)) outerpos(4)-(tightinset(2) + tightinset(4))];");
            textOut.newLine();
            textOut.write("set(gca,'position',newpos);");
            textOut.newLine();
            textOut.write("saveas(fig,'" + matlabPlotRelPath + "');");
            textOut.newLine();
            textOut.write("fidFriedman=fopen('" + friedmanTablePath + "','w+');");
            textOut.newLine();
            textOut.write("fprintf(fidFriedman,'%s,%s,%s,%s,%s,%s\\n','*TeamID','TeamID','Lowerbound','Mean','Upperbound','Significance');");
            textOut.newLine();
            textOut.write("for i=1:size(c,1)");
            textOut.newLine();
            textOut.write("        if sign(c(i,3))*sign(c(i,5)) > 0");
            textOut.newLine();
            textOut.write("            tf='TRUE';");
            textOut.newLine();
            textOut.write("        else");
            textOut.newLine();
            textOut.write("            tf='FALSE';");
            textOut.newLine();
            textOut.write("        end");
            textOut.newLine();
            textOut.write("         fprintf(fidFriedman,'%s,%s,%6.4f,%6.4f,%6.4f,%s\\n',algNames{c(i,1)},algNames{c(i,2)},c(i,3),c(i,4),c(i,5),tf);");
            textOut.newLine();
            textOut.write("end");
            textOut.newLine();
            textOut.write("fclose(fidFriedman);");
            textOut.newLine();
            textOut.write("exit;");
            textOut.newLine();


            
            textOut.close();
        } catch (IOException ex) {
            Logger.getLogger(TagClassificationBinaryEvaluator.class.getName()).log(Level.SEVERE, null, ex);
        }

        MatlabCommandlineIntegrationClass matlabIntegrator = new MatlabCommandlineIntegrationClass();
        matlabIntegrator.setMatlabBin(getMatlabPath());
        matlabIntegrator.setCommandFormattingStr("");
        matlabIntegrator.setMainCommand(evalCommand);
        matlabIntegrator.setWorkingDir(outputDir.getAbsolutePath());
        matlabIntegrator.start();
        try {
            matlabIntegrator.join();
            //  call matlab and execute Beta-Binomial test
        } catch (InterruptedException ex) {
            Logger.getLogger(TagClassificationAffinityEvaluator.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new File[]{new File(matlabPlotPath),new File(friedmanTablePath)};
    }

    public boolean getPerformMatlabStatSigTests() {
        return performMatlabStatSigTests;
    }

    public void setPerformMatlabStatSigTests(boolean performMatlabStatSigTests) {
        this.performMatlabStatSigTests = performMatlabStatSigTests;
    }

    public String getMatlabPath() {
        return matlabPath;
    }

    public void setMatlabPath(String matlabPath) {
        this.matlabPath = matlabPath;
    }
}
