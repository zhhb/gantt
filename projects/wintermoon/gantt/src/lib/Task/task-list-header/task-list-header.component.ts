import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { GanttService } from '../../gantt.service';
import { GanttChildrenBase } from '../../gantt.component';
import { debug } from 'debug';

const logger = debug('Gantt:TaskListHeaderComponent');

@Component({
  selector   : 'gantt-task-list-header',
  templateUrl: './task-list-header.component.html',
  styles     : []
})
export class TaskListHeaderComponent extends GanttChildrenBase implements OnInit {

  private readonly columnMinWidth   = 32;
  private resizerMoving             = false;
  private resizerPreClientX: number = null;
  private resizerColumn;
  private columns: any[]            = [];

  constructor(private ganttService: GanttService) {
    super();
  }

  ngOnInit() {
    this.columns = this.ganttService.getTaskListColumns(this.ganttId);
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
