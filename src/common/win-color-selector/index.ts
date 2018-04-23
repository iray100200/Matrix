import { Component, ViewChild, Directive, ViewContainerRef, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: '[mx-win-color-selector]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXWinColorSelector {
    @Input() color = 'transparent';
    @Output() colorChange: EventEmitter<any> = new EventEmitter();
}