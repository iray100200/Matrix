import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { MXCommonModule } from '../common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MXRouterConfig } from './app.router';
import { MXHomeComponent } from './components/home';
import { MXLayoutComponent } from './components/layout';

@NgModule({
  declarations: [
    AppComponent,
    MXHomeComponent,
    MXLayoutComponent
  ],
  imports: [
    MXCommonModule,
    RouterModule.forRoot(MXRouterConfig),
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }