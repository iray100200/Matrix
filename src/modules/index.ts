export * from './mx-layouts';
import { MXGuidanceLayout, MXLayoutsModule, LayoutsModule } from './mx-layouts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule, ClrIconModule } from '@clr/angular';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        LayoutsModule,
        MXLayoutsModule,
        ClarityModule,
        ClrIconModule
    ],
    bootstrap: [
        MXGuidanceLayout
    ]
})
export class MXModule {
    
}