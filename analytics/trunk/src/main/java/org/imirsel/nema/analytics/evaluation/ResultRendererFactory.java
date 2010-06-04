package org.imirsel.nema.analytics.evaluation;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.imirsel.nema.analytics.evaluation.chord.ChordEvaluator;
import org.imirsel.nema.analytics.evaluation.chord.ChordResultRenderer;
import org.imirsel.nema.analytics.evaluation.classification.ClassificationEvaluator;
import org.imirsel.nema.analytics.evaluation.key.KeyEvaluator;
import org.imirsel.nema.analytics.evaluation.key.KeyResultRenderer;
import org.imirsel.nema.analytics.evaluation.melody.MelodyEvaluator;
import org.imirsel.nema.analytics.evaluation.melody.MelodyResultRenderer;
import org.imirsel.nema.analytics.evaluation.tempo.TempoResultRenderer;
import org.imirsel.nema.model.NemaDataConstants;
import org.imirsel.nema.model.NemaDataset;
import org.imirsel.nema.model.NemaTask;
import org.imirsel.nema.model.NemaTrackList;

/**
 * Factory class that can setup known result renderer types keyed on the String
 * metadata id.
 *  
 * @author kris.west@gmail.com
 * @since 0.2.0
 */
public class ResultRendererFactory {
	
	private static final Map<String,Class<? extends ResultRenderer>> RESULT_RENDERER_REGISTRY = new HashMap<String, Class<? extends ResultRenderer>>();
	static{
		//register all the known evaluators for known metadata keys
		RESULT_RENDERER_REGISTRY.put(NemaDataConstants.CHORD_LABEL_SEQUENCE, ChordResultRenderer.class);
		RESULT_RENDERER_REGISTRY.put(NemaDataConstants.MELODY_EXTRACTION_DATA, MelodyResultRenderer.class);
		RESULT_RENDERER_REGISTRY.put(NemaDataConstants.KEY_DETECTION_DATA, KeyResultRenderer.class);
		RESULT_RENDERER_REGISTRY.put(NemaDataConstants.TEMPO_EXTRACTION_DATA, TempoResultRenderer.class);
		
			//classification tasks
//		RESULT_RENDERER_REGISTRY.put(NemaDataConstants.CLASSIFICATION_ALBUM, ClassificationResultRenderer.class);
//		RESULT_RENDERER_REGISTRY.put(NemaDataConstants.CLASSIFICATION_ARTIST, ClassificationResultRenderer.class);
//		RESULT_RENDERER_REGISTRY.put(NemaDataConstants.CLASSIFICATION_TITLE, ClassificationResultRenderer.class);
//		RESULT_RENDERER_REGISTRY.put(NemaDataConstants.CLASSIFICATION_GENRE, ClassificationResultRenderer.class);
//		RESULT_RENDERER_REGISTRY.put(NemaDataConstants.CLASSIFICATION_COMPOSER, ClassificationResultRenderer.class);
	}
	
	public static ResultRenderer getRenderer(String metadataKey,
            File outputDir,
            File workingDir,
            boolean performMatlabStatSigTests,
            File matlabPath
            ) throws InstantiationException, IllegalAccessException, FileNotFoundException{
		
		Class<? extends ResultRenderer> rendererClass = RESULT_RENDERER_REGISTRY.get(metadataKey);
		ResultRenderer out = rendererClass.newInstance();
		
		out.setOutputDir(outputDir);
		out.setWorkingDir(workingDir);
		out.setPerformMatlabStatSigTests(performMatlabStatSigTests);
		out.setMatlabPath(matlabPath);
		
		return out;
	}
}