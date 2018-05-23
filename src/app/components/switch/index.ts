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
    MAX_Z: number = 1.5;
    MIN_Z: number = 0.5;
    private ctrl_keydown = false;
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
            f.preventDefault();
            if (this.ctrl_keydown) {
                let delta = (this.wheelDelta + f.wheelDeltaY / 2400);
                delta = this.wheelDelta = delta < this.MIN_Z ? this.MIN_Z : delta > this.MAX_Z ? this.MAX_Z : delta;
                this.virtualWin.nativeElement.style.cssText = `transform:scale(${delta});width:${(100 / delta)}%;height:${(100 / delta)}%`;
            }
        })
        fromEvent(window, 'keydown').subscribe((f: KeyboardEvent) => {
            f.preventDefault()
            if (f.keyCode === 17) {
                this.ctrl_keydown = true;
            }
        })
        fromEvent(window, 'keyup').subscribe((f: KeyboardEvent) => {
            f.preventDefault();
            if (f.keyCode === 17) {
                this.ctrl_keydown = false;
            }
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
