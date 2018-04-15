import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "mx-layout",
    styleUrls: ["./style.css"],
    host: {
        "(click)": "onClick($event)"
    },
    template: `<div class="mx-layout">
            <div class="mx-layout-container">
                <ng-content></ng-content>
            </div>
        </div>`
})
export class MXWinBaseLayout {
    onClick(event): void {}
}
