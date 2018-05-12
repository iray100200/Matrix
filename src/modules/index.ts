export * from './layouts';
import { MXGuidanceLayout, MXLayoutsModule } from './layouts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        MXLayoutsModule
    ],
    exports: [
        MXLayoutsModule
    ],
    bootstrap: [
        MXGuidanceLayout
    ]
})
export class MXCombinedModules {
    
}