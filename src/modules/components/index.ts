import { CommonModule } from '@angular/common';
import { NgModule, Directive } from '@angular/core';
import { SampleComponent } from './sample-component';
import { Provider } from '@angular/core';
import { SampleComponentInterpreterDirective } from './sample-component/interpreter';
import { MXStandaloneComponentsModule } from './standalone';

export const MX_COM_DIRECTIVES: Provider[] = [
    SampleComponentInterpreterDirective
];

export * from './sample-component/interpreter';
export * from './standalone';
export * from './sample-component';

@NgModule({
    imports: [
        CommonModule,
        MXStandaloneComponentsModule
    ],
    declarations: [
        MX_COM_DIRECTIVES
    ],
    exports: [
        MX_COM_DIRECTIVES
    ],
    entryComponents: [
        MX_COM_DIRECTIVES
    ]
})
export class MXComponentsModule {

}