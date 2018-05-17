import { Component, ViewContainerRef, ViewChild, Directive, ViewChildren, AfterViewInit } from '@angular/core';
import { MXComponentServiceProvider } from '../../../common/win-services';

@Directive({
    selector: 'h2'
})
export class ElementDirective {}

@Component({
    selector: "[guidance]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"]
})
export class GuidanceLayout implements AfterViewInit {
    @ViewChildren(ElementDirective) children;
    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
    constructor(public viewContainer: ViewContainerRef) {

    }
    path: 'modules/mx-layouts/guidance';
    ngAfterViewInit() {

    }
}