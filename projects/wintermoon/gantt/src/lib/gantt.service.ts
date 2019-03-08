/**
 * use service to handle gantt ins simply
 *
 * support mutli gantt component instance
 */


import { Injectable } from '@angular/core';
import { merge } from 'lodash';
import { GanttOptions } from '../interface/gantt-options';

@Injectable({
  providedIn: 'root'
})
export class GanttService {

  private ganttInsCache: { id: string, options: GanttOptions, tasks: any[] }[] = [];

  constructor() {
  }

  public registerOrUpdate(id: string, options: GanttOptions, tasks: any[] = []): GanttOptions {
    let gic = this.ganttInsCache.find(cache => cache.id === id);
    if ( gic ) {
      merge(gic, { options });
    } else {
      gic = {
        id,
        options,
        tasks
      };
      this.ganttInsCache.push(gic);
    }
    return gic;
  }

  public getTaskListColumns(id: string): any[] {
    const pic = this.ganttInsCache.find(cache => cache.id === id);
    if ( !(pic && pic.options && pic.options.taskList && pic.options.taskList.columns) ) {
      return null;
    }
    return pic.options.taskList.columns;
  }

  public getTasks(id: string): any[] {
    const pic = this.ganttInsCache.find(cache => cache.id === id);
    if ( !(pic && pic.tasks) ) {
      return null;
    }
    return pic.tasks;
  }
}
