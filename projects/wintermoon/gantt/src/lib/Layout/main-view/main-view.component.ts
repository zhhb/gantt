import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GanttCompBase } from '../../gantt.component';

@Component({
  selector: 'gantt-main-view',
  template: `
    <div class="gantt-main-view">
      <section class="gantt-task-list-wrapper">
        <gantt-task-list [ganttId]="ganttId" [ganttOptions]="ganttOptions" [ganttTasks]="ganttTasks"></gantt-task-list>
      </section>
      <section class="gantt-chart-wrapper">
        <gantt-chart></gantt-chart>
      </section>
    </div>
  `,
  styles  : [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainViewComponent extends GanttCompBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
