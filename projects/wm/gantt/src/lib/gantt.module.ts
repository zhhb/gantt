import { NgModule } from '@angular/core';
import { GanttComponent } from './gantt.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarRowComponent } from './calendar/row/calendar-row.component';
import { ChartComponent } from './chart/chart.component';
import { DaysHighlightComponent } from './chart/days-highlight/days-highlight.component';
import { DependencyLinesComponent } from './chart/dependency-lines/dependency-lines.component';
import { GridComponent } from './chart/grid/grid.component';
import { ProgressBarComponent } from './chart/progress-bar/progress-bar.component';
import { TextComponent } from './chart/text/text.component';
import { MilestoneComponent } from './chart/row/milestone/milestone.component';
import { ProjectComponent } from './chart/row/project/project.component';
import { TaskComponent } from './chart/row/task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ItemColumnComponent } from './task-list/item-column/item-column.component';
import { TaskListHeaderComponent } from './task-list/task-list-header/task-list-header.component';
import { TaskListItemComponent } from './task-list/task-list-item/task-list-item.component';
import { ExpanderComponent } from './expander/expander.component';
import { HeaderComponent } from './header/header.component';
import { MainViewComponent } from './main-view/main-view.component';

@NgModule({
  declarations: [
    GanttComponent,
    CalendarComponent,
    CalendarRowComponent,
    ChartComponent,
    DaysHighlightComponent,
    DependencyLinesComponent,
    GridComponent,
    ProgressBarComponent,
    TextComponent,
    MilestoneComponent,
    ProjectComponent,
    TaskComponent,
    TaskListComponent,
    ItemColumnComponent,
    TaskListHeaderComponent,
    TaskListItemComponent,
    ExpanderComponent,
    HeaderComponent,
    MainViewComponent
  ],
  imports     : [],
  exports     : [
    GanttComponent
  ]
})
export class GanttModule {
}
