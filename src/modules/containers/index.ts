export * from './general';
export * from './general/index.p';
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
    ],
    entryComponents: [
        GeneralContainerInterpreter
    ]
})
export class MXContainersModule {

}