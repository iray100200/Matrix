export * from './sample-layout';
export * from './guidance';
export * from './standalone';
import { BrowserModule } from '@angular/platform-browser';
import { MXSampleLayout } from './sample-layout';
import { MXGuidanceLayout } from './guidance';
import { MXComponentsModule } from '../mx-components';
import { NgModule, NgModuleRef, ViewContainerRef, ComponentFactory } from '@angular/core';
import { MXCommonModule } from '../../common';
import { MX_COM_DIRECTIVES } from '../mx-components';
import { MXStandaloneLayoutsModule } from './standalone';
import { MXComponentServiceProvider } from '../../common/win-services';

@NgModule({
    imports: [
        BrowserModule,
        MXCommonModule,
        MXComponentsModule,
        MXStandaloneLayoutsModule
    ],
    declarations: [
        MXSampleLayout,
        MXGuidanceLayout
    ]
})
export class MXLayoutsModule {
    component: ComponentFactory<any>;
    constructor(private moduleRef: NgModuleRef<any>, private componentServiceProvider: MXComponentServiceProvider) {
        this.componentServiceProvider.subscribe(f => {
            switch(f.type) {
                case 'component': this.component = this.moduleRef.componentFactoryResolver.resolveComponentFactory(f.target);
                    break;
                case 'container': 
                    if (this.component) {
                        (<ViewContainerRef>f.target).createComponent(this.component);
                        this.component = null
                    }
                    break;
            }
        })
    }
}