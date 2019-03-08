import { Component, Input, OnInit } from '@angular/core';
import { GanttChildrenBase } from '../../gantt.component';

@Component({
  selector   : 'gantt-task-list',
  templateUrl: './task-list.component.html',
  styles     : []
})
export class TaskListComponent extends GanttChildrenBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
