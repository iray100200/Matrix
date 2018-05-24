import { Component, ViewContainerRef, AfterViewInit, ViewChild, HostListener, Directive, ComponentFactoryResolver } from '@angular/core';
import { MXComponentServiceProvider } from 'common/services';
import { GuidanceLayout } from './index';
import { MXWinComponentBox } from '../../../common/win-component-box';

@Component({
    selector: "[mx-guidance]",
    template: '<mx-layout><layout guidance #target></layout></mx-layout>'
})
export class MXGuidanceLayout implements AfterViewInit {
    @ViewChild(GuidanceLayout) target: GuidanceLayout;
    private component: any;
    constructor(private componentServiceProvider: MXComponentServiceProvider, private componentFactoryResolver: ComponentFactoryResolver) {
    }
    @HostListener('mouseenter', ['$event']) handleMouseenter(e) {
        if (MXWinComponentBox.activatedComponent) {
            let component = this.componentFactoryResolver.resolveComponentFactory(MXWinComponentBox.activatedComponent);
            this.target.container.createComponent(component);
        }
    }
    ngAfterViewInit() {
        
    }
}