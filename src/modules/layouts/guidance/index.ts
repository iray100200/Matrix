import { Component, ViewContainerRef, AfterViewInit, ViewChild } from '@angular/core';
import { MXComponentServiceProvider } from '../../../common/win-services';

@Component({
    selector: "[guidance]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"]
})
export class GuidanceLayout {
    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
    constructor() {

    }
    path: 'modules/mx-layouts/guidance'
}

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