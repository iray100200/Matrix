import { Component, Input, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '[mx-win-palette]',
    templateUrl: './template.html',
    styleUrls: ['./style.css'],
    encapsulation: ViewEncapsulation.None
})
export class MXWinPalette {
    @Input() x = 0;
    @Input() y = 0;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        
    }
    public appendTo(viewContainerRef: ViewContainerRef, x?: number, y?: number) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MXWinPalette);
        viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
    }
    handleChange(e) {

    }
    handleChangeComplete(e) {

    }
    handleSave(e) {

    }
    handleClose(e) {
        
    }
}