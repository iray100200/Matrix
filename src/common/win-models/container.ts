import { ViewContainerRef } from "@angular/core";

export abstract class Container {
    protected abstract target: ViewContainerRef;
}