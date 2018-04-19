import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MXStandaloneLayoutsModule } from '../src/modules/mx-layouts/layouts';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        MXStandaloneLayoutsModule
    ],
    providers: [
        HttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}