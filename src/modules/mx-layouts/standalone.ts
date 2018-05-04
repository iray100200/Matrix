import { BrowserModule } from '@angular/platform-browser';
import { SampleLayout } from './sample-layout';
import { GuidanceLayout } from './guidance';
import { NgModule } from '@angular/core';
import { MX_COMPONENTS } from '../mx-components';

@NgModule({
    declarations: [
        GuidanceLayout,
        SampleLayout,
        MX_COMPONENTS
    ],
    entryComponents: [
        GuidanceLayout,
        SampleLayout,
        MX_COMPONENTS
    ],
    exports: [
        GuidanceLayout,
        SampleLayout,
        MX_COMPONENTS
    ]
})
export class MXStandaloneLayoutsModule {

}