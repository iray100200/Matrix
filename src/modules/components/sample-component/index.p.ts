import {Component, ViewChild } from '@angular/core';
import { SampleComponent } from './index';
import { MXComponentServiceProvider } from 'common/services';
import { Interpreter } from '../../interpreter';

@Component({
    selector: 'component-outlet',
    template: `<component sample-component></component>`,
    entryComponents: [SampleComponent]
})
export class SampleComponentInterpreterDirective extends Interpreter {
    @ViewChild(SampleComponent) component: SampleComponent;
    attributes = ['padding', 'margin', 'width', 'height', 'background'];
    constructor(componentServiceProvider: MXComponentServiceProvider) {
        super(componentServiceProvider)
    }
}