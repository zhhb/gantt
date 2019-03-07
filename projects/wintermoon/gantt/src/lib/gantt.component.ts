import { Component, Input, OnInit } from '@angular/core';
import { v1 as uuid } from 'uuid';

@Component({
  selector: 'gantt-container',
  template: `
    <gantt-main-view></gantt-main-view>
  `,
  styles  : []
})
export class GanttComponent implements OnInit {

  // component id for making controlled easily by service
  private readonly id = uuid();

  constructor() {
  }

  ngOnInit() {

  }

}
