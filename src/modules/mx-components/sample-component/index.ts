import { Component, Input, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { MXBaseButtonComponent } from '../models/base';

@Component({
    selector: 'component[sample-component]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class SampleComponent extends MXBaseButtonComponent {
    @Input() name: string = "Button";
    constructor(protected elementRef: ElementRef) {
        super(elementRef);
    }
}