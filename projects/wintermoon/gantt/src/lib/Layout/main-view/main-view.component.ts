import { Component, Input, OnInit } from '@angular/core';
import { GanttChildrenBase } from '../../gantt.component';

@Component({
  selector   : 'gantt-main-view',
  templateUrl: './main-view.component.html',
  styles     : []
})
export class MainViewComponent extends GanttChildrenBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
