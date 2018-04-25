import { ElementRef, ViewChild } from '@angular/core';

export class MXBaseButtonComponent {
    @ViewChild('target') target;
    constructor(protected elementRef: ElementRef) {
    }
    private _width: number;
    private _height: number;
    get nativeElement() {
        return this.target.nativeElement;
    }
    get width() {
        this._width = this.target.nativeElement.offsetWidth;
        return this._width
    }
    set width(val) {
        this._width = val;
        this.nativeElement.style.width = val + 'px';
    }
    get height() {
        this._height = this.target.nativeElement.offsetHeight;
        return this._height;
    }
    set height(val) {
        this._height = val;
        this.nativeElement.style.height = val + 'px';
    }
}