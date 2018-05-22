import { Component, AfterViewInit, HostListener, ViewContainerRef } from '@angular/core';
import { MXComponentServiceProvider } from 'common/services';

export abstract class Interpreter implements AfterViewInit {
    protected abstract component: any;
    protected abstract attributes: Array<string>;
    protected attributesBeforeHover = {};
    protected componentServiceProvider: MXComponentServiceProvider;
    constructor(componentServiceProvider: MXComponentServiceProvider) {
        this.componentServiceProvider = componentServiceProvider;
    }
    @HostListener('click', ['$event']) handleClick(e:MouseEvent) {
        e.stopPropagation();
        this.componentServiceProvider.emit('interpreter', {
            target: this.component,
            attributes: {
                beforeHover: this.attributesBeforeHover
            }
        });
    }
    private getInstanceBeforeHover() {
        return this.attributesBeforeHover;
    }
    ngAfterViewInit() {
        if (this.attributes) {
            for (let attribute of this.attributes) {
                this.attributesBeforeHover[attribute] = this.component[attribute];
            }
        }
    }
}

export abstract class ContainerInterpreter extends Interpreter {
    @HostListener('mouseup', ['$event']) handleMouseup(e) {
        this.componentServiceProvider.emit('container/mouseup', {
            target: this.component
        })
    }
}