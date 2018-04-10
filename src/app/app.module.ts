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
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { SERVICES_PROVIDERS } from '../services';
import { MXWinLayoutsModule } from '../modules';

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
    CommonModule,
    ClarityModule,
    ClrIconModule,
    MXWinLayoutsModule
  ],
  providers: [
    SERVICES_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }