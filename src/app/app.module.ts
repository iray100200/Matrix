import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationModule } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { MXCommonModule } from '../common';
import { CommonModule } from '@angular/common';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { MXRouterConfig, CustomReuseStrategy } from './app.router';
import { MXHomeComponent } from './components/home';
import { MXSwitchComponent } from './components/switch';
import { MXSwitchToLayouts } from './components/switch-layouts';
import { MXSwitchToComponents } from './components/switch-components';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { SERVICES_PROVIDERS } from '../services';
import { MXLayoutsModule } from '../modules';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MXHomeComponent,
    MXSwitchComponent,
    MXSwitchToLayouts,
    MXSwitchToComponents
  ],
  imports: [
    CommonModule,
    ApplicationModule,
    MXCommonModule,
    RouterModule.forRoot(MXRouterConfig),
    CommonModule,
    ClarityModule,
    ClrIconModule,
    MXLayoutsModule,
    HttpClientModule
  ],
  providers: [
    SERVICES_PROVIDERS,
    HttpClient,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ],
  exports: [
    AppComponent,
    MXHomeComponent,
    MXSwitchComponent,
    MXSwitchToLayouts,
    MXSwitchToComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    
  }
}