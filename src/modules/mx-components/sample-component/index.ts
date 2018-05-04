import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { MXBaseButtonComponent } from '../models/base';

@Component({
    selector: 'component[sample-component]',
    templateUrl: './template.html',
    styleUrls: ['./style.css'],
    exportAs: 'sample'
})
export class SampleComponent extends MXBaseButtonComponent {
    constructor(protected elementRef: ElementRef) {
        super(elementRef);
    }
}