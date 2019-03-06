import { merge as mergeDeep } from 'lodash';
import { Component, Inject, Input, OnInit, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getOptions } from '../utils/helper';
import { GanttOptions } from '../interface/gantt-options';

@Component({
  selector: 'gantt-gantt',
  template: `
    <ng-container *ngTemplateOutlet="header;"></ng-container>
    <gantt-main-view></gantt-main-view>
    <ng-container *ngTemplateOutlet="footer;"></ng-container>
  `,
  styles  : []
})
export class GanttComponent implements OnInit {
  // default config
  maxRows               = 20;
  maxHeight             = 0;
  row: any              = {
    height: 24,
  };
  width                 = 0;
  height                = 0;
  clientWidth           = 0;
  rowsHeight            = 0;
  scrollBarHeight       = 0;
  allVisibleTasksHeight = 0;
  refs                  = {};
  tasksById             = {};

  scroll: any;
  times: any;
  chart: any;
  taskList: any;
  calendar: any;


  @Input() header: TemplateRef<any> = null;
  @Input() footer: TemplateRef<any> = null;
  @Input() tasks: any[]             = [];
  @Input() options: GanttOptions    = null;

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  ngOnInit() {
    const options: GanttOptions = mergeDeep({}, getOptions(this.options), this.options);
  }

  /**
   * Map tasks
   *
   * @param {Array} tasks
   * @param {Object} options
   */
  mapTasks(tasks: any[], options) {
    return tasks.map(task => ({
      ...task,
      id       : task[ options.taskMapping.id ],
      start    : task[ options.taskMapping.start ],
      label    : task[ options.taskMapping.label ],
      duration : task[ options.taskMapping.duration ],
      progress : task[ options.taskMapping.progress ],
      type     : task[ options.taskMapping.type ],
      style    : task[ options.taskMapping.style ],
      collapsed: task[ options.taskMapping.collapsed ]
    }));
  }

  /**
   * Fill out empty task properties and make it reactive
   */
  private refreshTasks() {
    this.tasks = this.tasks.map(task => {
      if ( typeof task.x === 'undefined' ) {
        task.x = 0;
      }
      if ( typeof task.y === 'undefined' ) {
        task.y = 0;
      }
      if ( typeof task.width === 'undefined' ) {
        task.width = 0;
      }
      if ( typeof task.height === 'undefined' ) {
        task.height = 0;
      }
      if ( typeof task.tooltip === 'undefined' ) {
        task.tooltip = { tooltip: { visible: false } };
      }
      if ( typeof task.tooltip.visible === 'undefined' ) {
        task.tooltip.visible = false;
      }
      if ( typeof task.mouseOver === 'undefined' ) {
        task.mouseOver = false;
      }
      if ( typeof task.visible === 'undefined' ) {
        task.visible = false;
      }
      if ( typeof task.collapsed === 'undefined' ) {
        task.collapsed = false;
      }
      if ( typeof task.dependentOn === 'undefined' ) {
        task.dependentOn = [];
      }
      if ( typeof task.parentId === 'undefined' ) {
        task.parentId = null;
      }
      if ( typeof task.style === 'undefined' ) {
        task.style = {};
      }
      if ( typeof task.children === 'undefined' ) {
        task.children = [];
      }
      if ( typeof task.allChildren === 'undefined' ) {
        task.allChildren = [];
      }
      if ( typeof task.parents === 'undefined' ) {
        task.parents = [];
      }
      if ( typeof task.parent === 'undefined' ) {
        task.parent = null;
      }
      if ( typeof task.durationMs === 'undefined' ) {
        task.durationMs = [];
      }
      return task;
    });
  }

  /**
   * Calculate height of scrollbar in current browser
   */
  private calcScrollBarHeight(): number {
    const document              = this.document;
    const outer                 = document.createElement('div');
    outer.style.visibility      = 'hidden';
    outer.style.height          = '100px';
    outer.style.msOverflowStyle = 'scrollbar';
    document.body.appendChild(outer);
    const noScroll       = outer.offsetHeight;
    outer.style.overflow = 'scroll';
    const inner          = document.createElement('div');
    inner.style.height   = '100%';
    outer.appendChild(inner);
    const withScroll = inner.offsetHeight;
    outer.parentNode.removeChild(outer);
    this.scrollBarHeight = noScroll - withScroll;
    return this.scrollBarHeight;
  }
}
