import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ResortDetailComponent } from './resort-detail/resort-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ResortsComponent,
    ResortDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
