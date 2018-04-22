import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[template-host]'
})
export class MXWinTemplateHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}