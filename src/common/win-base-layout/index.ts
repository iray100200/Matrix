import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "mx-layout",
    styleUrls: ["./style.scss"],
    host: {
        "(click)": "onClick($event)"
    },
    template: `<div class="_mx-layout">
            <div class="mx-layout-container stretch">
                <ng-content></ng-content>
            </div>
        </div>`,
    encapsulation: ViewEncapsulation.None
})
export class MXWinBaseLayout {
    onClick(event): void {}
}
