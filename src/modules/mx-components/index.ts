import { CommonModule } from '@angular/common';
import { NgModule, Directive } from '@angular/core';
import { SampleComponent } from './sample-component';
import { Provider } from '@angular/core';
import { SampleComponentInterpreterDirective } from './sample-component/interpreter';
import { MX_COMPONENTS } from './standalone';

export const MX_COM_DIRECTIVES: Provider[] = [
    SampleComponentInterpreterDirective
];

export * from './sample-component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MX_COMPONENTS,
        MX_COM_DIRECTIVES
    ],
    exports: [
        MX_COMPONENTS,
        MX_COM_DIRECTIVES
    ],
    entryComponents: [
        MX_COMPONENTS
    ]
})
export class MXComponentsModule {

}