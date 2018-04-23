import { Component, Input, ComponentFactory, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DocumentServiceProvider } from '../win-services';

@Component({
    selector: '[mx-win-palette]',
    templateUrl: './template.html',
    styleUrls: ['./style.css'],
    encapsulation: ViewEncapsulation.None
})
export class MXWinPalette implements AfterViewInit {
    @Input() x = 0;
    @Input() y = 0;
    @ViewChild('head') head: ElementRef;
    presetColors: Array<string> = ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B'];
    private get element() {
        return this.elementRef.nativeElement.firstChild;
    }
    get width() {
        return this.element.offsetWidth;
    }
    get height() {
        return this.element.offsetHeight;
    }
    constructor(private elementRef: ElementRef) {
        
    }
    private registerEvents() {
        let animation = null, me = this;
        let width = this.width, height = this.height;
        let clientWidth = document.documentElement.clientWidth, clientHeight = document.documentElement.clientHeight;
        let ex: number, ey: number, tx: number, ty: number, isMousedown: boolean = false;
        this.head.nativeElement.addEventListener('mousedown', (e: MouseEvent) => {
            ex = e.x;
            ey = e.y;
            tx = this.x;
            ty = this.y;
            isMousedown = true;
        });
        DocumentServiceProvider.MosuemoveEvent.subscribe(e => {
            if (isMousedown) {
                let xsize = e.x - ex, ysize = e.y - ey;
                if (animation) {
                    cancelAnimationFrame(animation);
                    animation = null;
                }
                animation = requestAnimationFrame(() => {
                    this.x = tx + xsize;
                    this.y = ty + ysize;
                });
            }
        });
        DocumentServiceProvider.MouseupEvent.subscribe(e => {
            isMousedown = false;
        });
    }
    ngAfterViewInit() {
        this.registerEvents();
    }
    handleChange(e) {

    }
    handleChangeComplete(e) {

    }
    handleSave(e) {

    }
    handleClose(e) {

    }
}