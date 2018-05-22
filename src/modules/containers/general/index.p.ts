import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Interpreter } from 'common/models/interpreter';
import { GeneralContainer } from './index';
import { MXComponentServiceProvider } from 'common/services';

@Component({
    selector: 'container-outlet',
    template: `<container general></container>`
})
export class GeneralContainerInterpreter extends Interpreter {
    @ViewChild(GeneralContainer) component: GeneralContainer;
    attributes = [];
    constructor(componentServiceProvider: MXComponentServiceProvider) {
        super(componentServiceProvider);
    }
    @HostListener('mouseup', ['$event']) handleMouseup() {
        this.componentServiceProvider.emit('container', {
            target: this.component.target
        });
    }
    @HostListener('mouseenter', ['$event']) handleMouseenter() {
        this.componentServiceProvider.emit('container/mouseenter', {
            target: this.component.target
        });
    }
}