import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { v1 as uuid } from 'uuid';
import { debug } from 'debug';
import { GanttService } from './gantt.service';
import { GanttOptions } from '../interface/gantt-options';
import { fetchDefaultGanttOptions, mergeGanttOptions } from '../utils/helper';
import { GanttTask } from '../interface/gantt-task';

const logger = debug('Gantt:GanttComponent');

@Component({
  // tslint:disable-next-line:component-selector
  selector       : 'gantt',
  template       : `
    <gantt-main-view [ganttId]="id" [ganttOptions]="ganttOptions" [ganttTasks]="tasks"></gantt-main-view>
  `,
  styles         : [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GanttComponent implements OnInit, OnChanges {

  // component id for making controlled easily by service
  private readonly id                = uuid();
  private ganttOptions: GanttOptions = fetchDefaultGanttOptions();

  @Input() options: GanttOptions;
  @Input() tasks: GanttTask[];

  @Output() ready: EventEmitter<string> = new EventEmitter();

  constructor(
    private cdr: ChangeDetectorRef,
    private ganttService: GanttService) {
  }

  ngOnInit() {
    // TODO
    this.ganttOptions = mergeGanttOptions(this.ganttOptions, this.options);
    // this.ganttService.registerOrUpdate(this.id, this.ganttOptions);
    this.ready.emit(this.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    logger('ngOnChanges %O', changes, this.options);
    this.ganttOptions = mergeGanttOptions(this.ganttOptions, this.options);
  }
}


export class GanttCompBase {
  @Input() ganttId: string;
  @Input() ganttOptions: GanttOptions;
  @Input() ganttTasks: GanttTask[];
}
