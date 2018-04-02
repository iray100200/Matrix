import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { MXRouterModule } from '../modules/router.module';
import { MXWinLeftNavigator, MXWinLeftNavigatorDirective } from '../components/win-left-navigator';
import { MXWinLayoutBox } from '../components/win-layout-box';
import { MXWinComponentBox } from '../components/win-component-box';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MXWinLeftNavigator,
    MXWinLeftNavigatorDirective,
    MXWinLayoutBox,
    MXWinComponentBox
  ],
  imports: [
    MXRouterModule,
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }