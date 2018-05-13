import { Component, ViewContainerRef, AfterViewInit, ViewChild } from '@angular/core';
import { MXComponentServiceProvider } from 'common/services';
import { GuidanceLayout } from './index';

@Component({
    selector: "[mx-guidance]",
    template: '<mx-layout><div guidance #target></div></mx-layout>',
    host: {
        '(mouseenter)': "handleMouseenter($event)"
    }
})
export class MXGuidanceLayout implements AfterViewInit {
    @ViewChild(GuidanceLayout) target: GuidanceLayout;
    private component: any;
    constructor(private componentServiceProvider: MXComponentServiceProvider) {
    }
    ngAfterViewInit() {
        
    }
}