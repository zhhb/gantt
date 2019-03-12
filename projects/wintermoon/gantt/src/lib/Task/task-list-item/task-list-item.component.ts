import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GanttCompBase } from '../../gantt.component';
import { GanttTask } from '../../../interface/gantt-task';

@Component({
  selector       : 'gantt-task-list-item',
  template       : `
    <div class="gantt-task-list-item">
      <gantt-item-column *ngFor="let column of columns"
                         [column]="column"
                         [task]="task"
                         [ganttOptions]="ganttOptions"
                         [ngStyle]="getColumnStyle(column)"></gantt-item-column>
    </div>
  `,
  styles         : [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListItemComponent extends GanttCompBase implements OnInit {

  @Input() task: GanttTask;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  private getColumnStyle(column) {
    return {
      'width.px'    : column.width,
      'min-width.px': column.width,
    };
  }
}
