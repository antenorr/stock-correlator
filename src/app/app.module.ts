import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import 'hammerjs';

import { AppComponent } from './app.component';
import { ToolTopComponent } from './tool-top/tool-top.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
