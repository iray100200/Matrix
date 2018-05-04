import { CommonModule } from '@angular/common';
import { NgModule, Directive } from '@angular/core';
import { SampleComponent, SampleComponentInterpreterDirective } from './sample-component';
import { Provider } from '@angular/core';
export * from './sample-component';

export const MX_COMPONENTS: Provider[] = [
    SampleComponent
]

export const MX_COM_DIRECTIVES: Provider[] = [
    SampleComponentInterpreterDirective
];