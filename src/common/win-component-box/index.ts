import { Component, Input, EventEmitter } from '@angular/core';
import { SampleComponent } from '../../modules/mx-components';

@Component({
    selector: "[mx-win-component-box]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"],
    host: {
        '(click)': 'handleClick($event)'
    }
})
export class MXWinComponentBox {
    @Input() componentName: string;
    @Input() img: any;
    private event: EventEmitter<any> = new EventEmitter();
    subscribe(fn: Function) {
        this.event.subscribe(fn);
    }
    handleClick(e) {
        this.event.emit(SampleComponent);
    }
}