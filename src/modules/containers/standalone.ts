import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeneralContainer } from './general';
import { Provider } from '@angular/core';

export const MX_CONTAINERS: Provider[] = [
    GeneralContainer
]

export * from './general';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MX_CONTAINERS
    ],
    exports: [
        MX_CONTAINERS
    ],
    entryComponents: [
        MX_CONTAINERS
    ]
})
export class MXStandaloneConatinersModule {

}