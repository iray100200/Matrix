export * from './sample-layout';
export * from './guidance';
export * from './layouts';
import { BrowserModule } from '@angular/platform-browser';
import { MXSampleLayout } from './sample-layout';
import { MXGuidanceLayout } from './guidance';
import { LayoutsModule } from './layouts';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MXCommonModule } from '../../common';

@NgModule({
    imports: [
        BrowserModule,
        MXCommonModule,
        LayoutsModule
    ],
    declarations: [
        MXSampleLayout,
        MXGuidanceLayout
    ],
    entryComponents: [
        MXSampleLayout,
        MXGuidanceLayout
    ]
})
export class MXLayoutsModule {

}