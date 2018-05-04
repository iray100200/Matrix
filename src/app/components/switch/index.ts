import {
    Component,
    ViewChild,
    ContentChild,
    OnInit, AfterViewInit,
    ElementRef,
    ViewContainerRef,
    Input,
    ViewChildren, QueryList,
    ComponentFactoryResolver
} from "@angular/core";
import * as ResLayouts from "./res-layouts.json";
import * as ResComponents from "./res-components.json";
import { MXService } from "../../../services/mx.service";
import { Router, RouterState, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MXWinComponentBox } from "../../../common/win-component-box";
import { MXGuidanceLayout } from "../../../modules/mx-layouts";
import { MXComponentServiceProvider } from '../../../common/win-services';

@Component({
    selector: "[mx-app-switch]",
    templateUrl: "./template.html",
    styleUrls: ["./style.scss"]
})
export class MXSwitchComponent implements OnInit, AfterViewInit {
    resJson: Array<any>;
    private resize: number = 0;
    location: string;
    constructor(router: Router, private componentFactoryResolver: ComponentFactoryResolver, private componentServiceProvider: MXComponentServiceProvider) {
        const state: RouterState = router.routerState;
        const root: ActivatedRoute = state.root;
        const child = root.firstChild;
        child.params.forEach(p => {
            this.location = p.location;
            this.resJson = this.location === "layout" ? <any>ResLayouts : <any>ResComponents;
        });
    }
    @ViewChild("virtualWin") virtualWin: ElementRef;
    @ViewChild("templateHost", { read: ViewContainerRef }) templateHost: ViewContainerRef;
    @ViewChildren('components') components: QueryList<MXWinComponentBox>;
    @ContentChild(MXGuidanceLayout) host: MXGuidanceLayout;
    ngOnInit() {
        window.addEventListener("resize", () => {
            this.resize++;
        });
        console.log(this.location);
    }
    ngAfterViewInit() {
        this.components.map(t => {
            return t.subscribe(f => {
                this.componentServiceProvider.emit({
                    target: f,
                    eventType: 'click'
                });
            })
        })
    }
    get vwidth(): number {
        return this.virtualWin.nativeElement.offsetWidth;
    }
    get vheight(): number {
        return this.virtualWin.nativeElement.offsetHeight;
    }
    handleComponentClick(e) {

    }
}
