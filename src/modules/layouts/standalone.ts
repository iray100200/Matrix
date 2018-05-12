import { CommonModule } from '@angular/common';
import { SampleLayout } from './sample-layout';
import { GuidanceLayout } from './guidance';
import { NgModule } from '@angular/core';
import { MXStandaloneComponentsModule } from '../components/standalone';

export const MX_LAYOUTS = [
    GuidanceLayout,
    SampleLayout
]

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MX_LAYOUTS
    ],
    entryComponents: [
        MX_LAYOUTS
    ],
    exports: [
        MX_LAYOUTS
    ]
})
export class MXStandaloneLayoutsModule {

}