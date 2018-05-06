import { Component, ViewChild, OnInit, ElementRef, ViewEncapsulation } from "@angular/core";
import { Events, MXWinLeftNavigator } from "../common/win-left-navigator";
import { AlertServiceProvider, MXService } from "../services";
import { MXGuidanceLayout } from "../modules";
import { MXRouterService } from 'common/services';

@Component({
    selector: "[matrix-root]",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    @ViewChild("context") context: ElementRef;
    @ViewChild("target") target: MXWinLeftNavigator;
    hasAlert: boolean = false;
    routerIndex: number;
    constructor(private alertService: AlertServiceProvider, private mxService: MXService, private routerService: MXRouterService) {
        this.routerIndex = 1;
    }
    ngOnInit() {
        this.alertService.subscribe(t => {
            this.hasAlert = t.hasAlert;
        });
        this.alertService.emit({
            hasAlert: true
        });
        this.routerService.subscribe(event => {
            let index = ['/account', '/switch/layout', '/switch/component'].findIndex(r => {
                return r === event.url;
            });
            this.routerIndex = 1 + (index > 0 ? index : 0);
        });
    }
    onSave() {
        var params = {
            template: `<div mx-guidance></div>`,
            import_deps: '',
            deps_of_module: ''
        };
        this.mxService.transform(params).subscribe(t => {});
    }
}