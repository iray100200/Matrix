import { Component, Directive } from '@angular/core';

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
    onClick(e) {

    }
}