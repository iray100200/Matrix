import { Component, ViewChild, OnInit, ElementRef, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from "@angular/core";
import { MXComponentServiceProvider } from "common/services";
import { MXRouterService } from 'common/services';
import { MXSwitchToComponents } from '../switch-components';
import { MXSwitchToContainers } from '../switch-containers';
import { MXSwitchToLayouts } from '../switch-layouts';
import { fromEvent } from "rxjs/observable/fromEvent";

@Component({
    selector: "[mx-app-switch]",
    templateUrl: "./template.html",
    styleUrls: ["./style.scss"]
})
export class MXSwitchComponent implements OnInit, AfterViewInit {
    resJson: Array<any>;
    private resize: number = 0;
    location: string;
    wheelDelta: number = 1;
    MAX_Z: number = 1.6;
    MIN_Z: number = 0.3;
    @ViewChild('switchHost', { read: ViewContainerRef }) switchHost: ViewContainerRef;
    componentMap: any = {
        '/switch/layout': MXSwitchToLayouts,
        '/switch/container': MXSwitchToContainers,
        '/switch/component': MXSwitchToComponents
    }
    constructor(
        private componentServiceProvider: MXComponentServiceProvider,
        private componentFactoryResolver: ComponentFactoryResolver,
        private routerService: MXRouterService
    ) {
        this.routerService.subscribe(event => {
            let component = this.componentMap[event.url];
            if (component) {
                let componentRef = this.componentFactoryResolver.resolveComponentFactory(component);
                this.switchHost.clear();
                this.switchHost.createComponent(componentRef);
            }
        });
    }
    @ViewChild("virtualWin") virtualWin: ElementRef;
    ngOnInit() {
        window.addEventListener("resize", () => {
            this.resize++;
        });
    }
    ngAfterViewInit() {
        fromEvent(this.virtualWin.nativeElement, 'mousewheel').subscribe((f: WheelEvent) => {
            let delta = (this.wheelDelta + f.wheelDeltaY / 1200);
            this.wheelDelta = delta < this.MIN_Z ? this.MIN_Z : delta > this.MAX_Z ? this.MAX_Z : delta;
            this.virtualWin.nativeElement.style.zoom = this.wheelDelta;
        })
    }
    get vwidth(): number {
        return this.virtualWin.nativeElement.offsetWidth;
    }
    get vheight(): number {
        return this.virtualWin.nativeElement.offsetHeight;
    }
    handleComponentClick(e) {}
}
