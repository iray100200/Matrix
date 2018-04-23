import { Component, Directive, EventEmitter } from '@angular/core';
import { MXComponentServiceProvider } from 'common/services';

@Component({
    selector: '[component="sample-component"]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class SampleComponent {
    properties: Array<string>;
}

@Directive({
    selector: '[component]',
    host: {
        '(click)': 'onClick($event)'
    }
})
export class SampleComponentInterpreter {
    constructor(private componentServiceProvider: MXComponentServiceProvider) {

    }
    onClick(e) {
        this.componentServiceProvider.emit({
            target: SampleComponent,
            eventType: 'click'
        });
    }
}