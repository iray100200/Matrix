import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
import { Router, RouterState, ActivatedRoute } from "@angular/router";
import { MXComponentServiceProvider } from "../../../common/win-services";

@Component({
    selector: "[mx-app-switch]",
    templateUrl: "./template.html",
    styleUrls: ["./style.scss"]
})
export class MXSwitchComponent implements OnInit {
    resJson: Array<any>;
    private resize: number = 0;
    location: string;
    constructor(
        router: Router,
        private componentServiceProvider: MXComponentServiceProvider
    ) {
        const state: RouterState = router.routerState;
        const root: ActivatedRoute = state.root;
        const child = root.firstChild;
        child.params.forEach(p => {
            this.location = p.location;
        });
    }
    @ViewChild("virtualWin") virtualWin: ElementRef;
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
    handleComponentClick(e) {}
}
