import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GanttColumn } from './gantt.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector       : 'gantt',
  template       : `
    <div class="gantt-wrapper">
      <table class="gantt-table">
        <thead class="gantt-head">
        <tr>
          <th class="gantt-resource-area" style="width: 25%">
            <ng-container *ngTemplateOutlet="scorllerTpl; context: {$implicit:'resource:head'}"></ng-container>
          </th>
          <th class="gantt-divider"></th>
          <th class="gantt-time-area">
            <ng-container *ngTemplateOutlet="scorllerTpl; context: {$implicit:'time:head'}"></ng-container>
          </th>
        </tr>
        </thead>
        <tbody class="gantt-body">
        <tr>
          <td class="gantt-resource-area">
            <ng-container *ngTemplateOutlet="scorllerTpl; context: {$implicit:'resource:body'}"></ng-container>
          </td>
          <td class="gantt-divider"></td>
          <td class="gantt-time-area">
            <ng-container *ngTemplateOutlet="scorllerTpl; context: {$implicit:'time:body'}"></ng-container>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <ng-template let-type #scorllerTpl>
      <div class="gantt-scoller-clip" [ngSwitch]="type">
        <div class="gantt-scoller gantt-no-scrollbars" ganttScroller>
          <div class="gantt-scoller-area" [ngStyle]="{'width.px': 'resource:head'===type?400:5000}">
            <div class="gantt-content">
              <ng-container *ngSwitchCase="'resource:head'" [ngTemplateOutlet]="resourceHeadTpl"></ng-container>
              <ng-container *ngSwitchCase="'time:head'" [ngTemplateOutlet]="timeHeadTpl"></ng-container>
              <ng-container *ngSwitchCase="'resource:body'" [ngTemplateOutlet]="resourceBodyTpl"></ng-container>
              <ng-container *ngSwitchCase="'time:body'" [ngTemplateOutlet]="timeBodyTpl"></ng-container>
            </div>
            <div class="gantt-bg"></div>
          </div>
        </div>
      </div>
    </ng-template>
    <ng-template #resourceHeadTpl>
      <table>
        <colgroup>
          <col *ngFor="let column of columns" style="width: 100px">
        </colgroup>
        <tbody>
        <tr>
          <th *ngFor="let column of columns">
            <div class="gantt-cell-content">
              <span class="gantt-cell-text">{{column.label}}</span>
            </div>
            <div class="gantt-resizer" ganttResizer></div>
          </th>
        </tr>
        </tbody>
      </table>
    </ng-template>
    <ng-template #timeHeadTpl>
      <table>
        <colgroup>
          <col *ngFor="let t of getTimelineItems(timeline.duration)">
        </colgroup>
        <tbody>
        <tr></tr>
        <tr>
          <th *ngFor="let t of getTimelineItems(timeline.duration);let i = index;">
            <div class="gantt-cell-content">
              <span class="gantt-cell-text">{{i}}</span>
            </div>
          </th>
        </tr>
        </tbody>
      </table>
    </ng-template>
    <ng-template #resourceBodyTpl>resource:body</ng-template>
    <ng-template #timeBodyTpl>time:body</ng-template>
  `,
  styles         : [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GanttComponent implements OnInit {

  columns: GanttColumn[] = [
    {
      id   : 0,
      key  : 'taskName',
      label: '任务名称',
    },
    {
      id   : 1,
      key  : 'executor',
      label: '执行者',
    },
    {
      id   : 2,
      key  : 'workdays',
      label: '工作量(天）',
    },
    {
      id   : 3,
      key  : 'starttime',
      label: '开始时间',
    },
    {
      id   : 4,
      key  : 'endtime',
      label: '结束时间',
    },
  ];
  timeline               = {
    duration: 100,
  };
  tasks: any[]           = [];

  constructor() {
  }

  ngOnInit() {
  }

  private getTimelineItems(length: number = 5) {
    return Array.from({ length }).map((_, i) => i);
  }
}
