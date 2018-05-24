import { Component, ElementRef, ViewChild, HostListener, ComponentFactoryResolver } from '@angular/core';
import { Interpreter } from 'common/models/interpreter';
import { GeneralContainer } from './index';
import { MXComponentServiceProvider } from 'common/services';
import { MXWinComponentBox } from '../../../common/win-component-box';

@Component({
    selector: 'container-outlet',
    template: `<container general></container>`
})
export class GeneralContainerInterpreter extends Interpreter {
    @ViewChild(GeneralContainer) component: GeneralContainer;
    attributes = [];
    constructor(componentServiceProvider: MXComponentServiceProvider, private componentFactoryResolver: ComponentFactoryResolver) {
        super(componentServiceProvider);
    }
    @HostListener('mouseup', ['$event']) handleMouseup() {
        if (MXWinComponentBox.activatedComponent) {
            let component = this.componentFactoryResolver.resolveComponentFactory(MXWinComponentBox.activatedComponent);
            this.component.target.createComponent(component);
        }
    }
}