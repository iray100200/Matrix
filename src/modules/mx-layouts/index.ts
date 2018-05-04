export * from './sample-layout';
export * from './guidance';
export * from './standalone';
import { BrowserModule } from '@angular/platform-browser';
import { MXSampleLayout } from './sample-layout';
import { MXGuidanceLayout } from './guidance';
import { MXStandaloneLayoutsModule } from './standalone';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MXCommonModule } from '../../common';
import { MX_COM_DIRECTIVES } from '../mx-components';

@NgModule({
    imports: [
        BrowserModule,
        MXCommonModule,
        MXStandaloneLayoutsModule
    ],
    declarations: [
        MXSampleLayout,
        MXGuidanceLayout,
        MX_COM_DIRECTIVES
    ],
    entryComponents: [
        MXSampleLayout,
        MXGuidanceLayout
    ],
    exports: [
        MX_COM_DIRECTIVES,
        MXStandaloneLayoutsModule
    ]
})
export class MXLayoutsModule {

}