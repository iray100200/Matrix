export * from './mx-layouts';
import { MXGuidanceLayout, MXLayoutsModule } from './mx-layouts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        MXLayoutsModule
    ],
    bootstrap: [
        MXGuidanceLayout
    ]
})
export class MXCombinedModules {
    
}