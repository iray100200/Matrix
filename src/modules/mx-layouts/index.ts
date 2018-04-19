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
import { StandaloneComponentsInterpreterModule } from '../mx-components';

@NgModule({
    imports: [
        BrowserModule,
        MXCommonModule,
        LayoutsModule,
        StandaloneComponentsInterpreterModule
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