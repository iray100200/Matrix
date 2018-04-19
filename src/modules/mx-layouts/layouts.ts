import { BrowserModule } from '@angular/platform-browser';
import { SampleLayout } from './sample-layout';
import { GuidanceLayout } from './guidance';
import { NgModule } from '@angular/core';
import { StandaloneComponentsModule, StandaloneComponentsInterpreterModule } from '../mx-components';

@NgModule({
    imports: [
        BrowserModule,
        StandaloneComponentsModule,
        StandaloneComponentsInterpreterModule
    ],
    declarations: [
        GuidanceLayout,
        SampleLayout
    ],
    entryComponents: [
        GuidanceLayout,
        SampleLayout
    ],
    exports: [
        GuidanceLayout,
        SampleLayout
    ]
})
export class LayoutsModule {

}

@NgModule({
    imports: [
        BrowserModule,
        StandaloneComponentsModule
    ],
    declarations: [
        GuidanceLayout,
        SampleLayout
    ],
    entryComponents: [
        GuidanceLayout,
        SampleLayout
    ],
    exports: [
        GuidanceLayout,
        SampleLayout
    ]
})
export class MXStandaloneLayoutsModule {

}