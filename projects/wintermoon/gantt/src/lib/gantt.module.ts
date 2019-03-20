import { NgModule } from '@angular/core';
import { GanttComponent } from './gantt.component';
import { TaskDirective } from './task.directive';
import { ChartDirective } from './chart.directive';
import { ProgressDirective } from './progress.directive';
import { ScrollerDirective } from './scroller.directive';
import { CommonModule } from '@angular/common';
import { ResizerDirective } from './resizer.directive';

@NgModule({
  declarations: [ GanttComponent, TaskDirective, ChartDirective, ProgressDirective, ScrollerDirective, ResizerDirective ],
  imports     : [ CommonModule ],
  exports     : [ GanttComponent ]
})
export class GanttModule {
}
