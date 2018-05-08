import { Component, ViewChild, Directive, ViewContainerRef, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: '[mx-win-color-picker]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXWinColorPicker {
    @Input() color = 'transparent';
    @Output() colorChange: EventEmitter<any> = new EventEmitter();
    onClick(e) {
        
    }
}