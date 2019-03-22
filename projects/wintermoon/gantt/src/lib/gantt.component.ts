import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GanttColumn } from './gantt.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector       : 'gantt',
  templateUrl    : './gantt.component.html',
  styles         : [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GanttComponent implements OnInit {

  columns: GanttColumn[] = [
    {
      id   : 0,
      key  : 'taskName',
      label: '任务名称',
      style: {
        width: 200
      }
    },
    {
      id   : 1,
      key  : 'executor',
      label: '执行者',
      style: {
        width: 100
      }
    },
    {
      id   : 2,
      key  : 'workdays',
      label: '工作量(天）',
      style: {
        width: 100
      }
    },
    {
      id   : 3,
      key  : 'starttime',
      label: '开始时间',
      style: {
        width: 100
      }
    },
    {
      id   : 4,
      key  : 'endtime',
      label: '结束时间',
      style: {
        width: 100
      }
    },
  ];
  timeline               = {
    duration: 100,
  };
  tasks: any[]           = [];

  get resourcesTotalWidth() {
    return this.columns
               .map((v) => {
                 return v.style && v.style.width ? v.style.width : 50;
               })
               .reduce((prev: number, current: number, index: number): number => {
                 return prev + current;
               });
  }

  get timelineTotalWidth() {
    return this.timeline.duration * 50;
  }


  constructor() {
  }

  ngOnInit() {
  }

  private getTimelineItems(length: number = 5) {
    return Array.from({ length }).map((_, i) => i);
  }

  private getColumnWidth(column: GanttColumn) {
    return column.style && column.style.width ? column.style.width : 50;
  }
}
