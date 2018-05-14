import { Component, ViewChild, OnInit, ElementRef, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { MXComponentServiceProvider } from "common/services";
import { MXRouterService } from 'common/services';
import { MXSwitchToComponents } from '../switch-components';
import { MXSwitchToContainers } from '../switch-containers';
import { MXSwitchToLayouts } from '../switch-layouts';

@Component({
    selector: "[mx-app-switch]",
    templateUrl: "./template.html",
    styleUrls: ["./style.scss"]
})
export class MXSwitchComponent implements OnInit {
    resJson: Array<any>;
    private resize: number = 0;
    location: string;
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
    get vwidth(): number {
        return this.virtualWin.nativeElement.offsetWidth;
    }
    get vheight(): number {
        return this.virtualWin.nativeElement.offsetHeight;
    }
    handleComponentClick(e) {}
}
