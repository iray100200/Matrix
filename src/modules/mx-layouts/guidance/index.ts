import { Directive, Component, ViewContainerRef, AfterViewInit, ElementRef, ViewChild, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import { MXComponentServiceProvider } from '../../../common/win-services';

@Component({
    selector: "[guidance]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"]
})
export class GuidanceLayout {
    @ViewChild('container', { read: ViewContainerRef }) container;
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
export class MXGuidanceLayout extends GuidanceLayout {
    @ViewChild(GuidanceLayout) target: GuidanceLayout;
    private event: EventEmitter<any> = new EventEmitter();
    private component: any;
    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private componentServiceProvider: MXComponentServiceProvider) {
        super();
        this.componentServiceProvider.subscribe(f => {
            this.component = f.target;
        })
    }
    load(component) {
        if (component) {
            this.target.container.createComponent(this.componentFactoryResolver.resolveComponentFactory(component));
        }
    }
    handleMouseenter(e) {
        this.load(this.component);
    }
}