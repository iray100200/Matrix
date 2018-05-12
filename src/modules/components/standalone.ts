import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SampleComponent } from './sample-component';
import { Provider } from '@angular/core';

export const MX_COMPONENTS: Provider[] = [
    SampleComponent
]

export * from './sample-component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MX_COMPONENTS
    ],
    exports: [
        MX_COMPONENTS
    ],
    entryComponents: [
        MX_COMPONENTS
    ]
})
export class MXStandaloneComponentsModule {

}