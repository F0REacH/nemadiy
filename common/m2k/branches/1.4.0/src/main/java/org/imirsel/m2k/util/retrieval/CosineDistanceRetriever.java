package org.imirsel.m2k.util.retrieval;
import java.io.File;
import org.imirsel.m2k.util.Signal;
import org.imirsel.m2k.util.noMetadataException;
import java.util.HashMap;
import java.util.ArrayList;
import org.imirsel.m2k.util.retrieval.DenseDistanceMatrix;
import org.imirsel.m2k.util.retrieval.SearchResult;

/**
 *
 *
 * @author Kris West (kw@cmp.uea.ac.uk)
 */
public class CosineDistanceRetriever implements SimpleDistMeasureRetrievalInterface{
    
    //File name to symbol counts maps (map indexed by symbol linking to integer count)
    HashMap FileLocationToFeaturesMap = null;
    HashMap FileLocationToSignalMap = null;
    String[] Files = null;
    double[] featureMeans = null;
    double[] featureStds = null;
    
    /** Creates a new instance of cooccurenceRetriever */
    public CosineDistanceRetriever() {
        FileLocationToFeaturesMap = new HashMap();
        FileLocationToSignalMap = new HashMap();
    }
    
    public String getRetrieverName(){
        String name = "Cosine distance retriever ";
        return name;
        
    }
    
    /** If necessary the index is built (for example an LSI index might be extracted)
     */
    public void finaliseIndex() {
        Files = (String[])this.FileLocationToSignalMap.keySet().toArray(new String[FileLocationToSignalMap.size()]);
        
        System.out.println("Calculating means and standard deviations for feature normalisation...");
        
        //calculate means and variances - use random sampling if necessary
        int numFeatures = ((Signal)this.FileLocationToSignalMap.get(Files[0])).getNumCols();
        featureMeans = new double[numFeatures];
        featureStds = new double[numFeatures];
        
        for (int i = 0; i < Files.length; i++) {
            double[] features = ((Signal)this.FileLocationToSignalMap.get(Files[i])).getDataRow(0);
            for (int j = 0; j < featureMeans.length; j++) {
                featureMeans[j] += features[j];
            }
        }
        for (int i = 0; i < featureMeans.length; i++) {
            featureMeans[i] /= Files.length;
        }
        
        for (int i = 0; i < Files.length; i++) {
            double[] features = ((Signal)this.FileLocationToSignalMap.get(Files[i])).getDataRow(0);
            for (int j = 0; j < featureMeans.length; j++) {
                featureStds[j] += Math.pow(features[j] - featureMeans[j],2.0);
            }
        }
        for (int i = 0; i < featureMeans.length; i++) {
            featureStds[i] = 4.0 * Math.sqrt(featureStds[i] / Files.length);
        }
        System.out.println("Done calculating means and standard deviations for feature normalisation.");
        
    }
    
    /** Add a transcription to the retriever */
    public void acceptFeatureProfile(Signal featureSignal) throws noMetadataException{
        this.Files = null;
        FileLocationToFeaturesMap.put(featureSignal.getStringMetadata(Signal.PROP_FILE_LOCATION), featureSignal.getDataRow(0));
        FileLocationToSignalMap.put(featureSignal.getStringMetadata(Signal.PROP_FILE_LOCATION),featureSignal);
    }
    
    /** Add a transcriptions to the retriever */
    public void acceptFeatureProfiles(Signal[] featureSignals) throws noMetadataException {
        for (int i = 0; i < featureSignals.length; i++) {
            acceptFeatureProfile(featureSignals[i]);
        }
    }
    
    /** Returns the list of Signal Objects currently indexed **/
    public Signal[] getSignals(){
        Object[] entries = FileLocationToSignalMap.values().toArray();
        Signal[] out = new Signal[entries.length];
        for(int i=0;i<entries.length;i++) {
            out[i] = (Signal)entries[i];
        }
        return out;
    }
    
    public String[] getFiles(){
        if (this.Files == null) {
            this.finaliseIndex();
        }
        return this.Files;
    }
    
    /** Returns the Signal Object for the specified file */
    public Signal getSignal(String fileLocation){
        return (Signal)FileLocationToSignalMap.get(fileLocation);
    }
    
    /** Retrieve transcriptions most similar to the query */
    public SearchResult[] retrieveMostSimilar(Signal likelihoodSignal) throws noMetadataException{
        if (this.Files == null) {
            this.finaliseIndex();
        }
        ArrayList results = new ArrayList();
        
        //get features
        double[] features = likelihoodSignal.getData()[likelihoodSignal.getColumnIndex(Signal.PROP_LIKELIHOODS)];
        double queryRootSquareSum = 0.0;

        for (int j = 0; j < features.length; j++) {
            queryRootSquareSum += Math.pow(features[j] / featureStds[j], 2.0);
        }
        queryRootSquareSum = Math.sqrt(queryRootSquareSum);

        
        //iterate through all files
        for (int i = 0; i < Files.length; i++) {
            float score = 0.0f;
            
            //get features
            double[] testFeatures = ((double[])this.FileLocationToFeaturesMap.get(Files[i]));
            
            //Normalised Cosine distance between likelihoods
            double prodSum = 0.0;
            double testSum = 0.0;
            for (int j = 0; j < features.length; j++) {
                prodSum += (features[j] / featureStds[j]) * (testFeatures[j] / featureStds[j]);
                testSum += Math.pow(testFeatures[j] / featureStds[j], 2.0);
            }
            score = (float)(prodSum / (queryRootSquareSum * Math.sqrt(testSum)));
            
            Signal outSig = (Signal)FileLocationToSignalMap.get((String)Files[i]);
            results.add(new SearchResult(outSig,score));
        }
        SearchResult[] outputResults = (SearchResult[])results.toArray(new SearchResult[results.size()]);
        java.util.Arrays.sort((Object[])outputResults);
        return outputResults;
    }
    
    public float[][] getSimilarityMatrix(){
        //iterate through all files
        if (Files == null) {
            this.finaliseIndex();
        }
        float[][] simMatrix = new float[Files.length][Files.length];
        
        for (int i = 0; i < Files.length; i++) {
            double[] features = ((double[])this.FileLocationToFeaturesMap.get(Files[i]));
            double queryRootSquareSum = 0.0;

            for (int j = 0; j < features.length; j++) {
                queryRootSquareSum += Math.pow(features[j] / featureStds[j], 2.0);
            }
            
            simMatrix[i][i] = 1.0f;
            for (int j = i+1; j < Files.length; j++) {
                //get likelihoods
                double[] testFeatures = ((double[])this.FileLocationToFeaturesMap.get(Files[j]));
                float score;
                
                //Normalised Cosine distance between likelihoods
                double prodSum = 0.0;
                double testSum = 0.0;
                for (int k = 0; k < features.length; k++) {
                    prodSum += (features[k] / featureStds[k]) * (testFeatures[k] / featureStds[k]);
                    testSum += Math.pow(testFeatures[k] / featureStds[k], 2.0);
                }
                score = (float)(prodSum / (queryRootSquareSum * Math.sqrt(testSum)));

                
                
                simMatrix[i][j] = simMatrix[j][i] = score;
            }
        }
        return simMatrix;
    }
    
    public DenseDistanceMatrix getDistanceMatrix(){
        //System.out.println("Extracting DistanceMatrix for CosineDistanceRetriever...");
        //iterate through all files
        if (Files == null) {
            this.finaliseIndex();
        }
        float[][] distMatrix = new float[Files.length][Files.length];
//        int reportInterval = 500;
//        int timesDone = 0;
//        long done = 0;
//        int dists = (((Files.length * Files.length) - Files.length) / 2) + Files.length;
        for (int i = 0; i < Files.length; i++) {
            double[] features = ((double[])this.FileLocationToFeaturesMap.get(Files[i]));
            double queryRootSquareSum = 0.0;

            for (int j = 0; j < features.length; j++) {
                queryRootSquareSum += Math.pow(features[j] / featureStds[j], 2.0);
            }
            
            distMatrix[i][i] = 0.0f;
            for (int j = i+1; j < Files.length; j++) {
                //get likelihoods
                double[] testFeatures = ((double[])this.FileLocationToFeaturesMap.get(Files[j]));
                float score;
                
                //Normalised Cosine distance between likelihoods
                double prodSum = 0.0;
                double testSum = 0.0;
                for (int k = 0; k < features.length; k++) {
                    prodSum += (features[k] / featureStds[k]) * (testFeatures[k] / featureStds[k]);
                    testSum += Math.pow(testFeatures[k] / featureStds[k], 2.0);
                }
                score = 1.0f - (float)(prodSum / (queryRootSquareSum * Math.sqrt(testSum)));    
                distMatrix[i][j] = distMatrix[j][i] = score;
//                done++;
                
            }
//            while (done >= 500)
//            {
//                done -= 500;
//                timesDone++;
//                System.out.println("    done " + (500*timesDone) + " of " + dists + " distances.");
//            }
        }
        File[] theFiles = new File[this.Files.length];
        for (int i = 0; i < this.Files.length; i++) {
            theFiles[i] = new File(this.Files[i]);
        }
//        System.out.println("Finished extracting DistanceMatrix for CosineDistanceRetriever");
        return new DenseDistanceMatrix(this.getRetrieverName(), distMatrix, theFiles);
    }
    
    /** Retrieve N transcriptions most similar to the query */
    public SearchResult[] retrieveNMostSimilar(Signal transcribedObject, int N) throws noMetadataException{
        SearchResult[] results = retrieveMostSimilar(transcribedObject);
        SearchResult[] truncResults = new SearchResult[N];
        for (int i = 0; i < truncResults.length; i++) {
            truncResults[i] = results[i];
        }
        return truncResults;
    }
}
