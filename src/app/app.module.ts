import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GanttModule } from '@wintermoon/gantt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    GanttModule,
    FormsModule,
  ],
  providers   : [],
  bootstrap   : [ AppComponent ]
})
export class AppModule {
}
