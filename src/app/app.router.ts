import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { MXSampleLayout } from '../modules';
import { SampleComponent } from '../modules/mx-components';
import { MXGuidanceLayout } from '../modules';
import { MXHomeComponent } from './components/home';
import { MXSwitchComponent } from './components/switch';

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
        path: 'switch/:location',
        component: MXSwitchComponent,
        children: [
            {
                path: '',
                component: MXGuidanceLayout
            },
            {
                path: 'sample-layouts',
                component: MXSampleLayout
            }
        ]
    }
]