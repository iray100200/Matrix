import { Component, Input, EventEmitter, AfterViewInit } from '@angular/core';
import { SampleComponentInterpreterDirective } from '../../modules/mx-components/sample-component/interpreter';

@Component({
    selector: "[mx-win-component-box]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"],
    host: {
        '(click)': 'handleClick($event)'
    }
})
export class MXWinComponentBox implements AfterViewInit {
    @Input() ref: string;
    @Input() img: any;
    @Input() name: any;
    @Input() shape: string;
    private event: EventEmitter<any> = new EventEmitter();
    subscribe(fn: Function) {
        this.event.subscribe(fn);
    }
    handleClick(e) {
        this.event.emit(SampleComponentInterpreterDirective);
    }
    ngAfterViewInit() {

    }
}