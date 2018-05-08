import { Component, Input, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { Button } from '../../../common/win-models/button';

@Component({
    selector: 'component[sample-component]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class SampleComponent extends Button {
    @Input() name: string = "Button";
    constructor(protected elementRef: ElementRef) {
        super(elementRef);
    }
}