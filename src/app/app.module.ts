import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ResortService } from './resort.service';
import { MessageService } from './message.service';

import { AppComponent } from './app.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ResortDetailComponent } from './resort-detail/resort-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { SheetjsComponent } from './sheetjs/sheetjs.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ResortsComponent,
    ResortDetailComponent,
    MessagesComponent,
    SheetjsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ResortService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
