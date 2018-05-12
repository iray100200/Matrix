export * from './general';
import { NgModule } from '@angular/core';
import { GeneralContainer } from './general';

@NgModule({
    declarations: [
        GeneralContainer
    ],
    exports: [
        GeneralContainer
    ]
})
export class MXContainersModule {

}