import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModuleModule } from './modules/material-module/material-module.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpUtilService } from './services/http-util.service';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [HttpUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
