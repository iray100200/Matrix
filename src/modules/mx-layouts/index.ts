export * from './sample-layout';
export * from './guidance';
export * from './standalone';
import { BrowserModule } from '@angular/platform-browser';
import { MXSampleLayout } from './sample-layout';
import { MXGuidanceLayout } from './guidance';
import { MXComponentsModule } from '../mx-components';
import { NgModule } from '@angular/core';
import { MXCommonModule } from '../../common';
import { MX_COM_DIRECTIVES } from '../mx-components';
import { MX_LAYOUTS } from './standalone';

@NgModule({
    imports: [
        BrowserModule,
        MXCommonModule,
        MXComponentsModule
    ],
    declarations: [
        MX_LAYOUTS,
        MXSampleLayout,
        MXGuidanceLayout
    ],
    entryComponents: [
        MX_LAYOUTS,
        MXSampleLayout,
        MXGuidanceLayout
    ],
    exports: [
        MX_LAYOUTS
    ]
})
export class MXLayoutsModule {

}