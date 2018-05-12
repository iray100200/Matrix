import { Directive, ContentChild, ViewContainerRef, Provider, Component, ViewChild, AfterViewInit } from '@angular/core';
import { SampleComponent } from './index';
import { MXComponentServiceProvider } from 'common/services';

@Component({
    selector: 'component-outlet',
    template: `<component sample-component></component>`,
    host: {
        '(click)': 'onClick($event)'
    },
    entryComponents: [SampleComponent]
})
export class SampleComponentInterpreterDirective implements AfterViewInit {
    @ViewChild(SampleComponent) component: SampleComponent;
    private attributesBeforeHover: {};
    constructor(private componentServiceProvider: MXComponentServiceProvider) {
        
    }
    onClick(e) {
        this.componentServiceProvider.emit('interpreter', {
            target: this.component,
            attributes: {
                beforeHover: this.attributesBeforeHover
            }
        });
    }
    getInstanceBeforeHover() {
        return this.attributesBeforeHover;
    }
    ngAfterViewInit() {
        this.attributesBeforeHover = {
            padding: this.component.padding,
            margin: this.component.margin,
            width: this.component.width,
            height: this.component.height,
            background: this.component.background
        }
    }
}