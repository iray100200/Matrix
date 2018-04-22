import { Component, ViewChild, Directive, ViewContainerRef } from '@angular/core';
import { MXWinPalette } from '../win-palette';
import { MXService } from '../../services/mx.service';

@Component({
    selector: '[mx-win-color-selector]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXWinColorSelector {
    color = 'transparent';
    winPalette: MXWinPalette;
    @ViewChild('templateHost', { read: ViewContainerRef }) templateHost;
    constructor(private service: MXService) {
        
    }
    onClick(e) {
        this.service.load(MXWinPalette);
    }
}