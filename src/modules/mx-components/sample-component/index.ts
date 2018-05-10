import { Component, Input, ViewChild, ElementRef, TemplateRef, AfterViewInit } from '@angular/core';
import { Button } from '../../../common/win-models/button';

@Component({
    selector: 'component[sample-component]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class SampleComponent extends Button implements AfterViewInit {
    @Input() name: string = "Button";
    style: any;
    private instance: {};
    constructor(protected elementRef: ElementRef) {
        super(elementRef);
    }
    getInstanceBeforeHover() {
        return this.instance;
    }
    ngAfterViewInit() {
        this.instance = Object.assign({}, {
            padding: this.padding,
            margin: this.margin,
            width: this.width,
            height: this.height,
            background: this.background
        });
    }
}