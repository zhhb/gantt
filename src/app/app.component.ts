import { Component, forwardRef } from '@angular/core';
import { Map } from 'immutable';
import { GanttOptions } from '../../projects/wintermoon/gantt/src/interface/gantt-options';

@Component({
  selector : 'app-root',
  template : `
    <button (click)="test()">Test {{count}}</button>
    <gantt [(ngModel)]="options" (ready)="onReady($event)" [tasks]="tasks"></gantt>
  `,
  styleUrls: [ './app.component.less' ],
})
export class AppComponent {
  title = 'gantt';
  ganttId: string;
  count = 1;

  options: GanttOptions = {
    taskList: {
      columns: [
        {
          id   : 0,
          value: 'id',
          label: 'ID',
          width: 40,
        },
        {
          id   : 1,
          value: 'desc',
          label: 'Description',
          width: 140,
        },
        {
          id   : 2,
          value: 'progress',
          label: '%',
          width: 40,
        },
        {
          id   : 4,
          value: 'author',
          label: 'Author',
          html : true,
          width: 100,
        },
      ]
    }
  };

  tasks = [
    {
      id      : 1,
      label   : 'dsadasdsad1',
      desc    : '23231',
      progress: 20,
    },
    {
      id      : 2,
      label   : 'dsadasdsad2',
      desc    : '23232',
      progress: 30,
    },
    {
      id      : 3,
      label   : 'dsadasdsad3',
      desc    : '23232',
      progress: 10,
      author: '<a href="http://www.baidu.com" target="_blank">Hello</a>'
    }
  ];

  constructor() {
  }

  onReady(id: string) {
    this.ganttId = id;
  }

  test() {
    this.count++;
    this.options.taskList.columns[ 0 ].label = `ID${this.count}`;
    this.options.taskList.columns[ 2 ].label = `${this.count}%`;
    this.options                             = Map(this.options).toObject();
    console.log('change');
  }
}
