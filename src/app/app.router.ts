import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonLayout } from '../common/win-layouts';
import { Guidance } from '../common/win-layouts';
import { MXHomeComponent } from './components/home';
import { MXLayoutComponent } from './components/layout';

export const MXRouterConfig = [
    {
        path: '',
        component: MXHomeComponent
    },
    {
        path: 'layout',
        component: MXLayoutComponent,
        children: [
            {
                path: '',
                component: Guidance
            },
            {
                path: 'win-layouts',
                component: CommonLayout
            }
        ]
    }
]