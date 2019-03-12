import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GanttTask } from '../../../interface/gantt-task';
import { GanttCompBase } from '../../gantt.component';

@Component({
  selector: 'gantt-item-column',
  template: `
    <div class="gantt-task-list-item-column">
      <ng-content></ng-content>
      <ng-container *ngIf="!isHtml; else htmlValue;">
        <div class="gantt-task-list-item-column-value">{{value}}</div>
      </ng-container>
      <ng-template #htmlValue>
        <div class="gantt-task-list-item-column-value" [innerHTML]="safetyHtml(value)">{{safetyHtml(value)}}</div>
      </ng-template>
    </div>
  `,
  styles  : []
})
export class TaskListItemColumnComponent extends GanttCompBase implements OnInit {

  @Input() column: any;
  @Input() task: GanttTask;

  get isHtml(): boolean {
    return this.column && this.column.html;
  }

  constructor(
    private sanitizer: DomSanitizer
  ) {
    super();
  }

  ngOnInit() {
  }

  safetyHtml(v: string) {
    // return this.value;
    return this.sanitizer.bypassSecurityTrustHtml(v) || '';
  }

  get value() {
    if ( !(this.column && this.column.value != null) ) {
      return '';
    }
    return this.task[ this.column.value ] || '';
  }
}
