import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { GanttService } from '../../gantt.service';
import { GanttCompBase } from '../../gantt.component';
import { debug } from 'debug';
import { GanttTask, GanttTaskType } from '../../../interface/gantt-task';

const logger = debug('Gantt:TaskListHeaderComponent');

@Component({
  selector       : 'gantt-task-list-header',
  template       : `
    <div class="gantt-task-list-header">
      <ng-container *ngFor="let column of columns">
        <div class="gantt-task-list-header-column"
             [ngStyle]="getHeaderColumnStyle(column)">
          <!--<gantt-expander type="task"></gantt-expander>-->
          <div class="gantt-task-list-header-column-label">{{column.label}}</div>
          <div class="gantt-task-list-header-column-resizer"
               (mousedown)="resizerStart($event,column)"></div>
        </div>
      </ng-container>
    </div>
  `,
  styles         : [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListHeaderComponent extends GanttCompBase implements OnInit {

  private readonly columnMinWidth   = 32;
  private resizerMoving             = false;
  private resizerPreClientX: number = null;
  private resizerColumn;


  private get columns(): any[] {
    return this.ganttOptions && this.ganttOptions.taskList && this.ganttOptions.taskList.columns;
  }

  constructor(private ganttService: GanttService) {
    super();
  }

  ngOnInit() {
    // this.columns = this.ganttService.getTaskListColumns(this.ganttId);
  }

  resizerStart(evt: MouseEvent, column) {
    if ( !this.resizerMoving ) {
      this.resizerMoving     = true;
      this.resizerColumn     = column;
      this.resizerPreClientX = evt.clientX;
      logger('resizer start, gantt id=%s, event is %O, column is %O', this.ganttId, evt, this.resizerColumn);
    }
  }

  @HostListener('document:mousemove', [ '$event' ])
  resizerMove(evt: MouseEvent) {
    if ( this.resizerMoving ) {
      evt.stopPropagation();
      evt.preventDefault();
      const currentClientX   = evt.clientX;
      this.resizerColumn.width += currentClientX - this.resizerPreClientX;
      this.resizerPreClientX = evt.clientX;
      logger('resizer moving, gantt id=%s, event is %O, column is %O', this.ganttId, evt, this.resizerColumn);
    }
  }

  @HostListener('document:mouseup', [ '$event' ])
  resizerEnd(evt: MouseEvent) {
    if ( this.resizerMoving ) {
      this.resizerMoving     = false;
      this.resizerColumn     = null;
      this.resizerPreClientX = null;
      logger('resizer ending, gantt id=%s, event is %O, column is %O', this.ganttId, evt, this.resizerColumn);
    }
  }

  private getHeaderColumnStyle(column) {
    column.width = Math.max(column.width, this.columnMinWidth);
    return {
      'width.px'    : column.width,
      'min-width.px': column.width,
    };
  }
}
