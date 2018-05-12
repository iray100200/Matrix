import { Component, ViewChildren, AfterViewInit, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { MXComponentServiceProvider } from '../win-services';
import { MXWinNumberPicker, MXWinNumberPickerGroup } from '../win-number-picker';
import { MXWinComplexPicker } from '../win-complex-picker';
import { Val } from '../win-models';

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
        componentServiceProvider.subscribe('interpreter', r => {
            this.direct(r.target, r.attributes);
        });
    }
    ngAfterViewInit() {
        
    }
    direct(component: ComponentRef<any>, attributes: any) {
        let styleProperties = ['width', 'height', 'margin', 'padding', 'background'];
        this.stylePanel.clear();
        styleProperties.forEach(t => {
            if (t in component) {
                let attributesBeforeHover = attributes.beforeHover;
                if (component[t] instanceof Val) {
                    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MXWinNumberPicker);
                    let componentRef = this.stylePanel.createComponent(componentFactory);
                    componentRef.instance.value = attributesBeforeHover[t];
                    componentRef.instance.label = t;
                    componentRef.instance.subscribe(v => {
                        component[t] = v;
                    });
                } else {
                    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MXWinComplexPicker);
                    let componentRef = this.stylePanel.createComponent(componentFactory);
                    componentRef.instance.value = attributesBeforeHover[t];
                    componentRef.instance.label = t;
                    componentRef.instance.subscribe(v => {
                        let prop = attributesBeforeHover[t];
                        prop[v.attribute] = v.value;
                        component[t] = prop;
                    });
                }
            }
        });
    }
}