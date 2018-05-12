import { Component, ElementRef, ViewChild } from '@angular/core';
import { Interpreter } from '../../interpreter';
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
}