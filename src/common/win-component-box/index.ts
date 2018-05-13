import { Component, Input, EventEmitter, AfterViewInit } from '@angular/core';
import { SampleComponentInterpreterDirective } from 'modules/components';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { MXDocumentServiceProvider as documentService } from '../win-services'

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
    private selected: boolean = false;
    private event: EventEmitter<any> = new EventEmitter();
    subscribe(fn: Function) {
        this.event.subscribe(fn);
    }
    handleClick(e) {
        this.event.emit(this.ref);
    }
    handleMousedown(e) {
        this.selected = true;
        document.body.classList.add('_mx-copy');
    }
    ngAfterViewInit() {
        documentService.MouseupEvent.subscribe(f => {
            this.selected = false;
            document.body.classList.remove('_mx-copy');
        })
    }
}