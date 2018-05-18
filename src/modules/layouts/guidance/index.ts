import { Component, ViewContainerRef, ViewChild, Directive, ViewChildren, AfterViewInit } from '@angular/core';
import { MXComponentServiceProvider } from '../../../common/win-services';

@Component({
    selector: "layout[guidance]",
    templateUrl: "./template.html"
})
export class GuidanceLayout implements AfterViewInit {
    @ViewChild('tpl', { read: ViewContainerRef }) container: ViewContainerRef;
    constructor(public viewContainer: ViewContainerRef) {

    }
    path: 'modules/mx-layouts/guidance';
    ngAfterViewInit() {

    }
}