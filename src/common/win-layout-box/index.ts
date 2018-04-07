import {
    Component,
    Input,
    HostListener,
    ElementRef,
    AfterViewInit,
    ViewChild
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "[mx-win-layout-box]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"]
})
export class MXWinLayoutBox implements AfterViewInit {
    @Input() img: string;
    @ViewChild('context') context: ElementRef;
    ngAfterViewInit() {
        this.context.nativeElement.style.backgroundImage = `url(${this.img})`;
    }
}
