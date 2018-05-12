export * from './general';
import { NgModule } from '@angular/core';
import { MXStandaloneConatinersModule } from './standalone';
import { GeneralContainerInterpreter } from './general/index.p';

@NgModule({
    imports: [
        MXStandaloneConatinersModule
    ],
    declarations: [
        GeneralContainerInterpreter
    ],
    exports: [
        GeneralContainerInterpreter
    ]
})
export class MXContainersModule {

}