export * from './mx-layouts';
import { MXGuidance, MXWinLayoutsModule } from './mx-layouts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MXCommonModule } from '../common';
import { ClarityModule, ClrIconModule } from '@clr/angular';

export class MXModules {
    static getLayoutModule(name) {
        switch (name) {
            case 'guidance':
                return MXGuidance;
        }
    }
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        MXWinLayoutsModule,
        MXCommonModule,
        ClarityModule,
        ClrIconModule
    ],
    bootstrap: [
        MXGuidance
    ]
})
export class MXModule {
    component;
    constructor(private mxModules: MXModules) {
        
    }
}