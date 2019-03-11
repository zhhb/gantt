import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GanttCompBase } from '../../gantt.component';
import { GanttTask } from '../../../interface/gantt-task';

@Component({
  selector       : 'gantt-task-list-item',
  template       : ``,
  styles         : [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListItemComponent extends GanttCompBase implements OnInit {

  @Input() task: GanttTask;

  get columns(): any[] {
    return this.ganttOptions && this.ganttOptions.taskList && this.ganttOptions.taskList.columns;
  }

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
