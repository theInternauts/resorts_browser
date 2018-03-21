import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ResortService } from './resort.service';
import { MessageService } from './message.service';
import { SheetJsService } from './sheet-js.service';

import { AppComponent } from './app.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ResortDetailComponent } from './resort-detail/resort-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { SheetjsComponent } from './sheetjs/sheetjs.component';
import { SheetViewComponent } from './sheet-view/sheet-view.component';
import { CourseChartComponent } from './course-chart/course-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    ResortsComponent,
    ResortDetailComponent,
    MessagesComponent,
    SheetjsComponent,
    SheetViewComponent,
    CourseChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    ResortService,
    MessageService,
    SheetJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
