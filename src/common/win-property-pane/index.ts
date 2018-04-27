import { Component, ViewChildren, AfterViewInit, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { MXWinColorSelector } from '../win-color-selector';
import { MXComponentServiceProvider } from '../win-services';
import { MXWinNumberPicker } from '../win-number-picker';

@Component({
    selector: '[mx-win-property-pane]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXWinPropertyPane implements AfterViewInit {
    @Input() component;
    @ViewChild('stylePanel', { read: ViewContainerRef }) stylePanel: ViewContainerRef;
    @ViewChild('numberPicker') numberPicker: MXWinNumberPicker;
    constructor(private componentServiceProvider: MXComponentServiceProvider, private componentFactoryResolver: ComponentFactoryResolver) {
        componentServiceProvider.subscribe(r => {
            this.direct(r.target);
        });
    }
    ngAfterViewInit() {
        
    }
    direct(component) {
        let styleProperties = ['width', 'height'];
        this.stylePanel.clear();
        styleProperties.forEach(t => {
            if (t in component) {
                let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MXWinNumberPicker);
                let componentRef =this.stylePanel.createComponent(componentFactory);
                componentRef.instance.value = component[t];
                componentRef.instance.subscribe(v => {
                    component[t] = v;
                })
            }
        });
    }
}