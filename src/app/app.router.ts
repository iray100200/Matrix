import { RouterModule, Router } from "@angular/router";
import { NgModule } from "@angular/core";
import { MXSampleLayout } from "../modules";
import { SampleComponent } from "modules/components";
import { MXGuidanceLayout } from "../modules";
import { MXHomeComponent } from "./components/home";
import { MXSwitchComponent } from "./components/switch";
import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle, Route } from "@angular/router";

interface RouteStorageObject {
    snapshot: ActivatedRouteSnapshot;
    handle: DetachedRouteHandle;
}

export const MXRouteConfig = [
    {
        path: "",
        redirectTo: '/account',
        pathMatch: 'full'
    },
    {
        path: "account",
        component: MXHomeComponent
    },
    {
        path: "switch/:location",
        component: MXSwitchComponent,
        children: [
            {
                path: "",
                component: MXGuidanceLayout
            },
            {
                path: "sample-layouts",
                component: MXSampleLayout
            },
            {
                path: "**",
                component: MXGuidanceLayout
            }
        ]
    }
]

export class CustomReuseStrategy implements RouteReuseStrategy {
    storedRoutes: { [key: string]: RouteStorageObject } = {};

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        let detach: boolean = true;
        return detach;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        let storedRoute: RouteStorageObject = {
            snapshot: route,
            handle: handle
        };
        this.storedRoutes[route.routeConfig.path] = storedRoute;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return (
            !!route.routeConfig && !!this.storedRoutes[route.routeConfig.path]
        );
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig || !this.storedRoutes[route.routeConfig.path])
            return null;
        return this.storedRoutes[route.routeConfig.path].handle;
    }

    shouldReuseRoute(
        future: ActivatedRouteSnapshot,
        curr: ActivatedRouteSnapshot
    ): boolean {
        return future.routeConfig === curr.routeConfig;
    }
}
