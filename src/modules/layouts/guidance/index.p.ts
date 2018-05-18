import { Component, ViewContainerRef, AfterViewInit, ViewChild, HostListener, Directive } from '@angular/core';
import { MXComponentServiceProvider } from 'common/services';
import { GuidanceLayout } from './index';

@Component({
    selector: "[mx-guidance]",
    template: '<mx-layout><layout guidance #target></layout></mx-layout>'
})
export class MXGuidanceLayout implements AfterViewInit {
    @ViewChild(GuidanceLayout) target: GuidanceLayout;
    private component: any;
    constructor(private componentServiceProvider: MXComponentServiceProvider) {
    }
    @HostListener('mouseenter', ['$event']) handleMouseenter(e) {
        this.componentServiceProvider.emit('layout/mouseenter', {
            target: this.target.container
        })
    }
    ngAfterViewInit() {
        
    }
}