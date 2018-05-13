import { Component, Input, ViewChild, ElementRef, TemplateRef, AfterViewInit } from '@angular/core';
import { Button } from 'common/models';

@Component({
    selector: 'component[sample-component]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class SampleComponent extends Button {
    @Input() name: string = "Button";
    constructor(protected elementRef: ElementRef) {
        super(elementRef)
    }
}