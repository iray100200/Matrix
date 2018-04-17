export * from './sample-layout';
export * from './guidance';
import { BrowserModule } from '@angular/platform-browser';
import { MXSampleLayout } from './sample-layout';
import { GuidanceLayout, MXGuidanceLayout } from './guidance';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MXCommonModule } from '../../common';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        GuidanceLayout
    ],
    entryComponents: [
        GuidanceLayout
    ],
    exports: [
        GuidanceLayout
    ]
})
export class LayoutsModule {

}

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