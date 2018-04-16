import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GuidanceLayout } from '../src/modules/mx-layouts/guidance';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule
    ],
    providers: [
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        GuidanceLayout
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}