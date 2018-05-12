import { Component, Input, EventEmitter, AfterViewInit } from '@angular/core';
import { SampleComponentInterpreterDirective } from 'modules/components';

@Component({
    selector: "[mx-win-component-box]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"],
    host: {
        '(click)': 'handleClick($event)',
        '(mousedown)': 'handleMousedown($event)'
    }
})
export class MXWinComponentBox implements AfterViewInit {
    @Input() ref: string;
    @Input() img: any;
    @Input() name: any;
    @Input() shape: string;
    private isMousedown: boolean = false;
    private event: EventEmitter<any> = new EventEmitter();
    subscribe(fn: Function) {
        this.event.subscribe(fn);
    }
    handleClick(e) {
        this.event.emit(this.ref);
    }
    handleMousedown(e) {
        
    }
    mousedown(e) {
        this.isMousedown = true;
    }
    ngAfterViewInit() {

    }
}