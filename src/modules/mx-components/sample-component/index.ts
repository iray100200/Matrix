import { Component, Directive, EventEmitter, Input, ViewChild, ContentChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MXComponentServiceProvider } from 'common/services';
import { MXBaseButtonComponent } from '../base';

@Component({
    selector: '[component="sample-component"]',
    templateUrl: './template.html',
    styleUrls: ['./style.css'],
    exportAs: 'sample'
})
export class SampleComponent extends MXBaseButtonComponent implements AfterViewInit, AfterViewChecked {
    constructor(protected elementRef: ElementRef) {
        super(elementRef);
    }
    ngAfterViewInit() {

    }
    ngAfterViewChecked() {
        
    }
}

@Directive({
    selector: '[component]',
    host: {
        '(click)': 'onClick($event)'
    }
})
export class SampleComponentInterpreter {
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