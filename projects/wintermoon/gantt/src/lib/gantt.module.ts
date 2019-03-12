import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GanttComponent } from './gantt.component';
import { CalendarRowComponent } from './Calendar/calendar-row/calendar-row.component';
import { CalendarComponent } from './Calendar/calendar/calendar.component';
import { MilestoneComponent } from './Chart/Row/milestone/milestone.component';
import { GroupComponent } from './Chart/Row/group/group.component';
import { TaskComponent } from './Chart/Row/task/task.component';
import { ChartComponent } from './Chart/chart/chart.component';
import { DaysHighlightComponent } from './Chart/days-highlight/days-highlight.component';
import { DependencyLinesComponent } from './Chart/dependency-lines/dependency-lines.component';
import { GridComponent } from './Chart/grid/grid.component';
import { ProgressBarComponent } from './Chart/progress-bar/progress-bar.component';
import { TextComponent } from './Chart/text/text.component';
import { TaskListComponent } from './Task/task-list/task-list.component';
import { TaskListHeaderComponent } from './Task/task-list-header/task-list-header.component';
import { TaskListItemComponent } from './Task/task-list-item/task-list-item.component';
import { TaskListItemColumnComponent } from './Task/task-list-item-column/task-list-item-column.component';
import { MainViewComponent } from './Layout/main-view/main-view.component';
import { HeaderComponent } from './Layout/header/header.component';
import { ExpanderComponent } from './Tools/expander/expander.component';


@NgModule({
  declarations: [
    GanttComponent,
    CalendarRowComponent,
    CalendarComponent,
    MilestoneComponent,
    GroupComponent,
    TaskComponent,
    ChartComponent,
    DaysHighlightComponent,
    DependencyLinesComponent,
    GridComponent,
    ProgressBarComponent,
    TextComponent,
    TaskListComponent,
    TaskListHeaderComponent,
    TaskListItemComponent,
    TaskListItemColumnComponent,
    MainViewComponent,
    HeaderComponent,
    ExpanderComponent
  ],
  imports     : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports     : [ GanttComponent ]
})
export class GanttModule {
}
