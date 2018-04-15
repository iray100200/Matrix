export * from './sample-layout';
export * from './guidance';
import { BrowserModule } from '@angular/platform-browser';
import { MXSampleLayout } from './sample-layout';
import { MXGuidance } from './guidance';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MXCommonModule } from '../../common';

@NgModule({
    imports: [
        BrowserModule,
        MXCommonModule
    ],
    declarations: [
        MXSampleLayout,
        MXGuidance
    ]
})
export class MXWinLayoutsModule {

}