import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GanttModule } from '../../projects/wintermoon/gantt/src/lib/gantt.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    GanttModule,
  ],
  providers   : [],
  bootstrap   : [ AppComponent ]
})
export class AppModule {
}
