import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { MXSampleLayout } from '../modules';
import { MXGuidance } from '../modules';
import { MXHomeComponent } from './components/home';
import { MXLayoutComponent } from './components/layout';

export const MXRouterConfig = [
    {
        path: '',
        component: MXHomeComponent
    },
    {
        path: 'account',
        component: MXHomeComponent
    },
    {
        path: 'layout',
        component: MXLayoutComponent,
        children: [
            {
                path: '',
                component: MXGuidance
            },
            {
                path: 'win-layouts',
                component: MXSampleLayout
            }
        ]
    }
]