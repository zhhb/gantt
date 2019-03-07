import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'gantt-task-list',
  templateUrl: './task-list.component.html',
  styles     : [ `
    .gantt-task-list-container {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }

    .gantt-task-list {
      box-sizing: border-box;
      background: transparent;
    }
  ` ]
})
export class TaskListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
