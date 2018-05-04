import { Directive, ContentChild, ViewContainerRef, Provider } from '@angular/core';
import { SampleComponent } from './index';
import { MXComponentServiceProvider } from 'common/services';

@Directive({
    selector: 'component',
    host: {
        '(click)': 'onClick($event)'
    }
})
export class SampleComponentInterpreterDirective {
    @ContentChild(SampleComponent) component;
    constructor(private componentServiceProvider: MXComponentServiceProvider) {
        
    }
    onClick(e) {
        this.componentServiceProvider.emit({
            target: this.component,
            eventType: 'click'
        });
    }
}