import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { v1 as uuid } from 'uuid';
import { GanttService } from './gantt.service';
import { GanttOptions } from '../interface/gantt-options';
import { mergeGanttOptions } from '../utils/helper';
import { debug } from 'debug';

const logger = debug('Gantt:GanttComponent');

@Component({
  selector: 'gantt-container',
  template: `
    <gantt-main-view [ganttId]="id"></gantt-main-view>
  `,
  styles  : []
})
export class GanttComponent implements OnInit, OnChanges {

  // component id for making controlled easily by service
  private readonly id = uuid();
  private ganttOptions: GanttOptions;

  @Input() options: GanttOptions;

  @Output() ready: EventEmitter<string> = new EventEmitter();

  constructor(private ganttService: GanttService) {
  }

  ngOnInit() {
    // TODO
    this.ganttOptions = mergeGanttOptions(this.options);
    this.ganttService.registerOrUpdate(this.id, this.ganttOptions);
    this.ready.emit(this.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    logger(changes);
  }
}


export class GanttChildrenBase {
  @Input() ganttId: string;
}
