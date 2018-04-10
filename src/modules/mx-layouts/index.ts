export * from './sample-layout';
export * from './guidance';
import { BrowserModule } from '@angular/platform-browser';
import { MXSampleLayout } from './sample-layout';
import { MXGuidance } from './guidance';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        MXSampleLayout,
        MXGuidance
    ]
})
export class MXWinLayoutsModule {

}