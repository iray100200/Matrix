import { Component, ViewChildren, AfterViewInit, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { MXWinColorSelector } from '../win-color-selector';
import { MXComponentServiceProvider } from '../win-services';

@Component({
    selector: '[mx-win-property-pane]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXWinPropertyPane implements AfterViewInit {
    @Input() component;
    @ViewChild('stylePanel', { read: ViewContainerRef }) stylePanel;
    constructor(private componentServiceProvider: MXComponentServiceProvider) {
        componentServiceProvider.subscribe(r => {
            r.target.width = 200;
        });
    }
    ngAfterViewInit() {
        
    }
}