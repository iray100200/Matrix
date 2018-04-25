import { CommonModule } from '@angular/common';
import { NgModule, Directive } from '@angular/core';
import { SampleComponent } from './sample-component';
import { SampleComponentInterpreter} from './sample-component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SampleComponent
    ],
    exports: [
        SampleComponent
    ]
})
export class StandaloneComponentsModule {

}

@NgModule({
    declarations: [
        SampleComponentInterpreter
    ],
    exports: [
        SampleComponentInterpreter
    ]
})
export class StandaloneComponentsInterpreterModule {

}