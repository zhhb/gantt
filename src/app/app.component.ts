import { Component } from '@angular/core';
import { GanttOptions } from '../../projects/wintermoon/gantt/src/interface/gantt-options';
import { GanttService } from '../../projects/wintermoon/gantt/src/lib/gantt.service';

@Component({
  selector : 'app-root',
  template : `
    <button (click)="test()">Test</button>
    <gantt-container [options]="options" (ready)="onReady($event)"></gantt-container>
  `,
  styleUrls: [ './app.component.less' ]
})
export class AppComponent {
  title = 'gantt';
  ganttId: string;
  count = 0;

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

  constructor(private ganttService: GanttService) {
  }

  onReady(id: string) {
    this.ganttId = id;
  }

  test() {
    this.options.taskList.columns[ 0 ].label = `ID${++this.count}`;
    this.options.taskList.columns[ 2 ].label = `${this.count}%`;
    this.ganttService.registerOrUpdate(this.ganttId, this.options);
    console.log('change');
  }
}
