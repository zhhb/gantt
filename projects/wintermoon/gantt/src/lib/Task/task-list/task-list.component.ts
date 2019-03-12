import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GanttCompBase } from '../../gantt.component';

@Component({
  selector       : 'gantt-task-list',
  template       : `
    <div class="gantt-task-list-container">
      <div class="gantt-task-list">
        <gantt-task-list-header [ganttOptions]="ganttOptions"></gantt-task-list-header>
        <div class="gantt-task-list-items">
          <gantt-task-list-item *ngFor="let task of ganttTasks"
                                [ganttOptions]="ganttOptions"
                                [task]="task"></gantt-task-list-item>
        </div>
      </div>
    </div>
  `,
  styles         : [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent extends GanttCompBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
