import { Component } from '@angular/core';
import { GanttOptions } from '../../projects/wintermoon/gantt/src/interface/gantt-options';

@Component({
  selector : 'app-root',
  template : `
    <button (click)="test()">Test {{count}}</button>
    <gantt [(options)]="options" (ready)="onReady($event)" [count]="count"></gantt>
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
      ]
    }
  };

  constructor() {
  }

  onReady(id: string) {
    this.ganttId = id;
  }

  test() {
    this.count++;
    // this.options.taskList.columns[ 0 ].label = `ID${this.count}`;
    // this.options.taskList.columns[ 2 ].label = `${this.count}%`;
    // this.options                             = Map(this.options).toObject();
    console.log('change');
  }
}
