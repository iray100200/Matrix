import { Component, ViewChildren, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MXWinColorSelector } from '../win-color-selector';
import { MXComponentServiceProvider } from '../win-services';

@Component({
    selector: '[mx-win-property-pane]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXWinPropertyPane implements AfterViewInit {
    @ViewChild('stylePanel', { read: ViewContainerRef }) stylePanel;
    ngAfterViewInit() {
        
    }
}