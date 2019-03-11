import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GanttCompBase } from '../../gantt.component';

@Component({
  selector       : 'gantt-task-list-item',
  template       : ``,
  styles         : [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListItemComponent extends GanttCompBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
