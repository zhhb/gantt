import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'gantt-main-view',
  templateUrl: './main-view.component.html',
  styles     : [ `
    .gantt-main-view {
      position: relative;
      display: flex;
      flex-direction: row;
      max-width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    .gantt-task-list-wrapper {
      box-sizing: border-box;
    }

    .gantt-chart-wrapper {
      box-sizing: border-box;
      flex: auto;
      overflow: hidden;
      max-width: 100%;
    }
  ` ]
})
export class MainViewComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
