import { Component, ViewChild, OnInit, ElementRef, ComponentFactoryResolver } from "@angular/core";
import { Events, MXWinLeftNavigator } from "../common/win-left-navigator";
import { AlertServiceProvider, MXService } from "../services";
import { MXGuidanceLayout } from "../modules";

@Component({
    selector: "[matrix-root]",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    @ViewChild("context") context: ElementRef;
    @ViewChild("target") target: MXWinLeftNavigator;
    hasAlert: boolean = false;
    constructor(
        private alertService: AlertServiceProvider,
        private mxService: MXService
    ) {}
    ngOnInit() {
        this.alertService.subscribe(t => {
            this.hasAlert = t.hasAlert;
        });
        this.alertService.emit({
            hasAlert: true
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
