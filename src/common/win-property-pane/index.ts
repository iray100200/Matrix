import { Component, ViewChildren, AfterViewInit, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { MXWinColorSelector } from '../win-color-selector';
import { MXComponentServiceProvider } from '../win-services';
import { MXWinNumberPicker, MXWinNumberPickerGroup } from '../win-number-picker';

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
    direct(component: ComponentRef<any>) {
        let styleProperties = ['width', 'height', 'margin', 'padding'];
        this.stylePanel.clear();
        styleProperties.forEach(t => {
            if (t in component) {
                switch (typeof component[t]) {
                    case 'number': {
                        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MXWinNumberPicker);
                        let componentRef = this.stylePanel.createComponent(componentFactory);
                        componentRef.instance.value = component[t];
                        componentRef.instance.label = t;
                        componentRef.instance.subscribe(v => {
                            component[t] = v;
                        });
                        break;
                    }
                    case 'object': {
                        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MXWinNumberPickerGroup);
                        let componentRef = this.stylePanel.createComponent(componentFactory);
                        componentRef.instance.label = t;
                        componentRef.instance.value = component[t];
                        break;
                    }
                }
                
            }
        });
    }
}