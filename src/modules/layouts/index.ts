export * from './sample-layout';
export * from './guidance';
export * from './standalone';
export * from './sample-layout/index.p';
export * from './guidance/index.p';
import { BrowserModule } from '@angular/platform-browser';
import { MXSampleLayout } from './sample-layout/index.p';
import { MXGuidanceLayout } from './guidance/index.p';
import { MXComponentsModule } from '../components';
import { NgModule, NgModuleRef, ViewContainerRef, ComponentFactory } from '@angular/core';
import { MXCommonModule } from '../../common';
import { MX_COM_DIRECTIVES } from '../components';
import { MXStandaloneLayoutsModule } from './standalone';
import { MXContainersModule } from '../containers';
import { MXComponentServiceProvider } from 'common/services';

@NgModule({
    imports: [
        BrowserModule,
        MXCommonModule,
        MXComponentsModule,
        MXContainersModule,
        MXStandaloneLayoutsModule
    ],
    declarations: [
        MXSampleLayout,
        MXGuidanceLayout
    ]
})
export class MXLayoutsModule {
    component: ComponentFactory<any>;
    layout: any;
    constructor(private moduleRef: NgModuleRef<any>, private componentServiceProvider: MXComponentServiceProvider) {
        this.componentServiceProvider.subscribe('component_active', f => {
            
        });
        this.componentServiceProvider.subscribe('container/mouseup', f => {
            this.component = this.moduleRef.componentFactoryResolver.resolveComponentFactory(f.target);
            if (this.component && this.layout) {
                let componentRef = (<ViewContainerRef>this.layout).createComponent(this.component);
                this.component = null
            }
        });
        this.componentServiceProvider.subscribe('layout/mouseenter', f => {
            this.layout = f.target
        });
        this.componentServiceProvider.subscribe('container/mouseenter', f => {
            this.layout = f.target
        });
    }
}