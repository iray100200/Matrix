import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonLayout } from '../components/win-layouts';

export const RouteConfig = [
    {
        path: '',
        loadChildren: './home.module#HomeModule'
    },
    {
        path: 'layout/common',
        component: CommonLayout
    }
]
@NgModule({
    declarations: [
        CommonLayout
    ],
    imports: [RouterModule.forRoot(RouteConfig)],
    exports: [RouterModule]
})
export class MXRouterModule {

}