export * from './common-layout';
import { CommonLayout } from './common-layout';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const RouterConfig = [
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
        CommonLayout
    ]
})
export class MXWinLayoutsModule {

}