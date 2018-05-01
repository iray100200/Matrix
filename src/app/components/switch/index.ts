import {
    Component,
    ViewChild,
    OnInit,
    ElementRef,
    ViewContainerRef,
    Input
} from "@angular/core";
import * as ResLayouts from "./res-layouts.json";
import * as ResComponents from "./res-components.json";
import { MXService } from "../../../services/mx.service";
import { Router, RouterState, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "[mx-app-switch]",
    templateUrl: "./template.html",
    styleUrls: ["./style.scss"]
})
export class MXSwitchComponent implements OnInit {
    resJson: Array<any>;
    private resize: number = 0;
    location: string;
    constructor(router: Router) {
        const state: RouterState = router.routerState;
        const root: ActivatedRoute = state.root;
        const child = root.firstChild;
        child.params.forEach(p => {
            this.location = p.location;
            this.resJson = this.location === "layout" ? <any>ResLayouts : <any>ResComponents;
        });
    }
    @ViewChild("virtualWin") virtualWin: ElementRef;
    @ViewChild("templateHost", { read: ViewContainerRef })
    templateHost;
    ngOnInit() {
        window.addEventListener("resize", () => {
            this.resize++;
        });
        console.log(this.location);
    }
    get vwidth(): number {
        return this.virtualWin.nativeElement.offsetWidth;
    }
    get vheight(): number {
        return this.virtualWin.nativeElement.offsetHeight;
    }
}
