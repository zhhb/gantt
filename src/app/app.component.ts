import { ChangeDetectorRef, Component } from '@angular/core';
import { Map } from 'immutable';
import { GanttOptions } from '../../projects/wintermoon/gantt/src/interface/gantt-options';
import { GanttService } from '../../projects/wintermoon/gantt/src/lib/gantt.service';

@Component({
  selector : 'app-root',
  template : `
    <button (click)="test()">Test {{data.count}}</button>
    <gantt [options]="options" (ready)="onReady($event)"></gantt>
  `,
  styleUrls: [ './app.component.less' ],
})
export class AppComponent {
  title = 'gantt';
  ganttId: string;
  data  = { count: 1 };

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

  constructor(
    private cdr: ChangeDetectorRef,
    private ganttService: GanttService) {
  }

  onReady(id: string) {
    this.ganttId = id;
  }

  test() {
    this.data.count++;
    this.options.taskList.columns[ 0 ].label = `ID${this.data.count}`;
    this.options.taskList.columns[ 2 ].label = `${this.data.count}%`;
    this.options                             = Map(this.options).toObject();
    // this.ganttService.registerOrUpdate(this.ganttId, this.options);
    console.log('change');
  }
}
