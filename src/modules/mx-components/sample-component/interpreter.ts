import { Directive, ContentChild, ViewContainerRef, Provider, Component, ViewChild } from '@angular/core';
import { SampleComponent } from './index';
import { MXComponentServiceProvider } from 'common/services';

@Component({
    selector: 'component-outlet',
    template: `<component sample-component></component>`,
    host: {
        '(click)': 'onClick($event)'
    }
})
export class SampleComponentInterpreterDirective {
    @ViewChild(SampleComponent) component;
    constructor(private componentServiceProvider: MXComponentServiceProvider) {
        
    }
    onClick(e) {
        this.componentServiceProvider.emit({
            target: this.component,
            type: '_component'
        });
    }
}