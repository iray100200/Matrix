import { Directive } from '@angular/core';

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