import { Component, ViewChild, Directive, ViewContainerRef, EventEmitter } from '@angular/core';
import { MXWinPalette } from '../win-palette';
import { MXService } from '../../services/mx.service';

@Component({
    selector: '[mx-win-color-selector]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXWinColorSelector {
    color = 'transparent';
    SelectEvent: EventEmitter<any> = new EventEmitter();
    constructor(private service: MXService) {
        
    }
    onClick(e) {
        this.service.load(MXWinPalette);
        this.SelectEvent.emit({
            name: 'win-color-selector',
            eventType: 'click'
        })
    }
}