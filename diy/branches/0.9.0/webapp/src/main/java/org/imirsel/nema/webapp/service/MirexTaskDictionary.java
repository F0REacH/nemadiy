/**
 * 
 */
package org.imirsel.nema.webapp.service;

import java.util.List;

import org.imirsel.nema.model.MirexTask;

/**
 * @author gzhu1
 *
 */
public interface MirexTaskDictionary extends Dictionary<MirexTask,Long>{
   MirexTask find(Long id);
   void add(MirexTask task);
   void refresh();
   List<MirexTask> getAll();
}