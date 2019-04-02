import { ChangeDetectorRef, Component } from '@angular/core';
import { GanttColumn, GanttTimeline } from '../../projects/wintermoon/gantt/src/lib/gantt.interface';

@Component({
  selector : 'app-root',
  template : `
    <gantt [columns]="columns"
           [timeline]="timeline"
           [tasks]="tasks"></gantt>
  `,
  styleUrls: [ './app.component.less' ],
})
export class AppComponent {

  columns: GanttColumn[]  = [
    {
      id   : 0,
      key  : 'name',
      label: '任务名称',
      style: {
        width: 160
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
        width: 120
      }
    },
    {
      id   : 4,
      key  : 'endtime',
      label: '结束时间',
      style: {
        width: 120
      }
    },
  ];
  timeline: GanttTimeline = {
    startDate : new Date('2019-03-01'),
    duration  : 120,
    rowHeight : 24,
    headHeight: 32,
  };
  tasks: any[]            = [
    {
      name     : '任务1',
      executor : '成员A',
      workdays : 8,
      starttime: '2019-03-04',
      endtime  : '2019-03-12',
    },
    {
      name     : '任务1',
      executor : '成员A',
      workdays : 8,
      starttime: '2019-03-04',
      endtime  : '2019-03-12',
    },
  ];

  constructor() {
  }
}
