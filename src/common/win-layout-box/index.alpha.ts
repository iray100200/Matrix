import {
    Component,
    Input,
    AfterViewChecked,
    HostListener,
    ElementRef,
    AfterViewInit
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "[mx-win-layout-box]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"]
})
export class MXWinLayoutBox implements AfterViewInit, AfterViewChecked {
    @Input() layoutName: string;
    @Input() outputTarget: HTMLElement;
    private isMousedown: boolean = false;
    private nativeElement: HTMLElement;
    protected cloneElement: HTMLElement;
    constructor(private router: Router, private elementRef: ElementRef) {
        this.nativeElement = this.elementRef.nativeElement;
    }
    @HostListener("mousedown", ["$event"])
    mousedown() {
        this.isMousedown = true;
        if (!this.cloneElement) {
            this.cloneElement = this.createVirtualBox(0, 0, 0, 0);
        }
    }
    createVirtualBox(w: number, h: number, x: number, y: number): HTMLElement {
        let node = <HTMLElement>this.nativeElement.cloneNode(true).firstChild;
        node.classList.add("cloned");
        node.style.left = x + "px";
        node.style.top = y + "px";
        return node;
    }
    moveVirtualBox(x: number, y: number) {
        if (this.cloneElement) {
            this.cloneElement.style.left = x + "px";
            this.cloneElement.style.top = y + "px";
        }
    }
    ngAfterViewInit() {
        if (this.outputTarget) {
            this.outputTarget.addEventListener("mouseenter", e => {
                if (this.isMousedown && this.cloneElement) {
                    this.outputTarget.appendChild(this.cloneElement);
                }
            });
            this.outputTarget.addEventListener("mousemove", e => {
                if (this.isMousedown && this.cloneElement) {
                    this.moveVirtualBox(e.offsetX, e.offsetY);
                }
            });
            this.outputTarget.addEventListener("mouseup", e => {
                if (this.isMousedown && this.cloneElement) {
                    this.isMousedown = false;
                    //this.cloneElement.remove();
                }
            });
        }
    }
    ngAfterViewChecked() {
        
    }
}
