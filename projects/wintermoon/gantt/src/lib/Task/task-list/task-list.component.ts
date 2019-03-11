import { Component, Input, OnInit } from '@angular/core';
import { GanttChildrenBase } from '../../gantt.component';

@Component({
  selector: 'gantt-task-list',
  template: `
    <div class="gantt-task-list-container">
      <div class="gantt-task-list">
        <gantt-task-list-header [ganttId]="ganttId"></gantt-task-list-header>
        <div class="gantt-task-list-items">
          <gantt-task-list-item></gantt-task-list-item>
        </div>
      </div>
    </div>
  `,
  styles  : []
})
export class TaskListComponent extends GanttChildrenBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
