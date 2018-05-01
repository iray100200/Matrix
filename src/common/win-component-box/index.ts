import { Component, Input } from '@angular/core';

@Component({
    selector: "[mx-win-component-box]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"]
})
export class MXWinComponentBox {
    @Input() componentName: string;
    @Input() img: any;
}