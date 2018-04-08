export * from './common-layout';
export * from './guidance';
import { BrowserModule } from '@angular/platform-browser';
import { CommonLayout } from './common-layout';
import { Guidance } from './guidance';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        CommonLayout,
        Guidance
    ]
})
export class MXWinLayoutsModule {

}