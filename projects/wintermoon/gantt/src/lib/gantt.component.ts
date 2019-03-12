import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter, forwardRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { v1 as uuid } from 'uuid';
import { debug } from 'debug';
import { GanttOptions } from '../interface/gantt-options';
import { GanttTask } from '../interface/gantt-task';
import { fetchDefaultGanttOptions, mergeGanttOptions } from '../utils/helper';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const logger = debug('Gantt:GanttComponent');
const noop   = () => {
};

@Component({
  // tslint:disable-next-line:component-selector
  selector       : 'gantt',
  template       : `
    <gantt-main-view [ganttOptions]="options" [ganttTasks]="tasks"></gantt-main-view>
  `,
  styles         : [],
  providers      : [
    {
      provide    : NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GanttComponent),
      multi      : true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GanttComponent implements OnInit, OnChanges, ControlValueAccessor {

  // component id for making controlled easily by service
  private readonly id                = uuid();
  private ganttOptions: GanttOptions = fetchDefaultGanttOptions();
  private onChange: (_: any) => void = noop;
  private onTouched                  = noop;

  set options(v: GanttOptions) {
    this.ganttOptions = mergeGanttOptions(this.ganttOptions, v);
    this.onChange(this.ganttOptions);
  }

  get options(): GanttOptions {
    return this.ganttOptions;
  }

  // @Input() options: GanttOptions;
  @Input() tasks: GanttTask[];

  @Output() ready: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    // TODO
    // this.ganttOptions = mergeGanttOptions(this.ganttOptions, this.options);
    // this.options      = this.ganttOptions;
    // this.ganttService.registerOrUpdate(this.id, this.ganttOptions);
    this.ready.emit(this.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    logger('ngOnChanges %O', changes);
    // this.ganttOptions = mergeGanttOptions(this.ganttOptions, this.options);
    // this.onChange(this.ganttOptions);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(options: GanttOptions): void {
    logger('writeValue: %O', options);
    if ( options !== this.ganttOptions ) {
      this.options = options;
    }
  }
}


export class GanttCompBase {
  @Input() ganttOptions: GanttOptions;
  @Input() ganttTasks: GanttTask[];

  get columns(): any[] {
    return this.ganttOptions && this.ganttOptions.taskList && this.ganttOptions.taskList.columns;
  }
}
