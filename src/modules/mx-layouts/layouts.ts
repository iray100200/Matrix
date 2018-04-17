import { BrowserModule } from '@angular/platform-browser';
import { MXSampleLayout } from './sample-layout';
import { GuidanceLayout } from './guidance';
import { NgModule } from '@angular/core';

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