import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { GanttCompBase } from '../../gantt.component';
import { debug } from 'debug';

const logger = debug('Gantt:TaskListHeaderComponent');

@Component({
  selector       : 'gantt-task-list-header',
  template       : `
    <div class="gantt-task-list-header">
      <div class="gantt-task-list-header-column"
           *ngFor="let column of columns"
           [ngStyle]="getHeaderColumnStyle(column)">
        <!--<gantt-expander type="task"></gantt-expander>-->
        <div class="gantt-task-list-header-column-label">{{column.label}}</div>
        <div class="gantt-task-list-header-column-resizer"
             (mousedown)="resizerStart($event,column)"></div>
      </div>
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

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
  }

  resizerStart(evt: MouseEvent, column) {
    if ( !this.resizerMoving ) {
      this.resizerMoving     = true;
      this.resizerColumn     = column;
      this.resizerPreClientX = evt.clientX;
      logger('resizer start, event is %O, column is %O', evt, this.resizerColumn);
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
      logger('resizer moving, event is %O, column is %O', evt, this.resizerColumn);
      this.cdr.markForCheck();
    }
  }

  @HostListener('document:mouseup', [ '$event' ])
  resizerEnd(evt: MouseEvent) {
    if ( this.resizerMoving ) {
      this.resizerMoving     = false;
      this.resizerColumn     = null;
      this.resizerPreClientX = null;
      logger('resizer ending, event is %O, column is %O', evt, this.resizerColumn);
      this.cdr.markForCheck();
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
