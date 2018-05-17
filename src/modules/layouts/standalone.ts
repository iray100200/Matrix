import { CommonModule } from '@angular/common';
import { SampleLayout } from './sample-layout';
import { GuidanceLayout, ElementDirective } from './guidance';
import { NgModule } from '@angular/core';
import { MXStandaloneComponentsModule } from '../components/standalone';
import { MXStandaloneConatinersModule } from '../containers/standalone';

export const MX_LAYOUTS = [
    GuidanceLayout,
    SampleLayout
]

@NgModule({
    imports: [
        CommonModule,
        MXStandaloneComponentsModule,
        MXStandaloneConatinersModule
    ],
    declarations: [
        MX_LAYOUTS,
        ElementDirective
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