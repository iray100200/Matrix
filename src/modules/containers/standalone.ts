import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeneralContainer } from './general';
import { Provider } from '@angular/core';

export const MX_COMPONENTS: Provider[] = [
    GeneralContainer
]

export * from './general';

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
export class MXStandaloneConatinersModule {

}