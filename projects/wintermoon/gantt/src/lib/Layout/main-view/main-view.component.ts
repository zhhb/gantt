import { Component, Input, OnInit } from '@angular/core';
import { GanttChildrenBase } from '../../gantt.component';

@Component({
  selector: 'gantt-main-view',
  template: `
    <div class="gantt-main-view">
      <section class="gantt-task-list-wrapper">
        <gantt-task-list [ganttId]="ganttId"></gantt-task-list>
      </section>
      <section class="gantt-chart-wrapper">
        <gantt-chart></gantt-chart>
      </section>
    </div>
  `,
  styles  : []
})
export class MainViewComponent extends GanttChildrenBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
