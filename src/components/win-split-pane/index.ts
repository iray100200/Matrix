import { Directive, Input, ElementRef, AfterViewInit, ViewChild, ContentChild } from '@angular/core';

@Directive({
    selector: '[mx-win-primary-side]',
})
export class MXWinPrimarySide {
    nativeElement;
    constructor(private elementRef: ElementRef) {
        this.nativeElement = this.elementRef.nativeElement;
    }
}

@Directive({
    selector: '[mx-win-secondary-side]',
})
export class MXWinSecondarySide {
    nativeElement;
    constructor(private elementRef: ElementRef) {
        this.nativeElement = this.elementRef.nativeElement;
    }
}

@Directive({
    selector: '[mx-win-split-pane]',
    queries: {
        primarySide: new ContentChild(MXWinPrimarySide),
        secondarySide: new ContentChild(MXWinSecondarySide)
    }
})
export class MXWinSplitPane implements AfterViewInit {
    @Input() direction: string = 'vertical';
    private nativeElement: HTMLElement;
    private sash: HTMLElement;
    private isMousedown: boolean = false;
    private x: number;
    private animation;
    primarySide: MXWinPrimarySide;
    secondarySide: MXWinSecondarySide;
    constructor(private elementRef: ElementRef) {
        this.nativeElement = this.elementRef.nativeElement;
    }
    bindEvents() {
        function moveTo(val: number) {
            this.primarySide.nativeElement.style.width = this.sash.style.left = (this.primarySide.nativeElement.offsetWidth + val) + 'px';
        }
        this.sash.addEventListener('mousedown', (e) => {
            this.isMousedown = true;
            this.x = e.x;
        })
        this.nativeElement.addEventListener('mousemove', (e) => {
            if (this.isMousedown) {
                if (this.animation) {
                    cancelAnimationFrame(this.animation);
                }
                this.animation = requestAnimationFrame(() => {
                    moveTo.call(this, e.x - this.x);
                    this.x = e.x;
                });
            }
        })
        this.nativeElement.addEventListener('mouseup', () => {
            this.isMousedown = false;
        })
    }
    ngAfterViewInit() {
        this.sash = document.createElement('div');
        this.sash.className = '_mx-monaco-sash';
        this.sash.style.left = this.primarySide.nativeElement.offsetWidth + 'px';
        !/relative|absolute/.test(getComputedStyle(this.nativeElement).position) ? this.nativeElement.style.position = 'relative' : null;
        this.nativeElement.classList.add('_mx-split-pane');
        this.nativeElement.appendChild(this.sash);
        this.bindEvents();
    }
}