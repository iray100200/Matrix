import { BrowserModule } from '@angular/platform-browser';
import { SampleLayout } from './sample-layout';
import { GuidanceLayout } from './guidance';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        BrowserModule
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