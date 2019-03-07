import { Component, Input, OnInit } from '@angular/core';

export type ExpanderType = 'task' | 'chart';

@Component({
  selector   : 'gantt-expander',
  templateUrl: './expander.component.html',
  styles     : []
})
export class ExpanderComponent implements OnInit {

  @Input() type: ExpanderType = 'task';

  constructor() {
  }

  ngOnInit() {
  }

}
