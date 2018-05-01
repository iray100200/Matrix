import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationModule } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { MXCommonModule } from '../common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MXRouterConfig } from './app.router';
import { MXHomeComponent } from './components/home';
import { MXSwitchComponent } from './components/switch';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { SERVICES_PROVIDERS } from '../services';
import { MXLayoutsModule } from '../modules';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MXHomeComponent,
    MXSwitchComponent
  ],
  imports: [
    ApplicationModule,
    MXCommonModule,
    RouterModule.forRoot(MXRouterConfig),
    BrowserModule,
    CommonModule,
    ClarityModule,
    ClrIconModule,
    MXLayoutsModule,
    HttpClientModule
  ],
  providers: [
    SERVICES_PROVIDERS,
    HttpClient
  ],
  exports: [
    AppComponent,
    MXHomeComponent,
    MXSwitchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    
  }
}