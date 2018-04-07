export * from './common-layout';
export * from './guidance';
import { CommonLayout } from './common-layout';
import { Guidance } from './guidance';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const RouterConfig = [
    {
        path: '',
        component: Guidance
    },
    {
        path: 'win-layouts',
        component: CommonLayout
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(RouterConfig)
    ],
    declarations: [
        CommonLayout,
        Guidance
    ]
})
export class MXWinLayoutsModule {

}