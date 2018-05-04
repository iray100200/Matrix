import { ElementRef, ViewChild } from '@angular/core';

class Margin {
    left: string;
    right: string;
    bottom: string;
    top: string;
    constructor(top?, right?, bottom?, left?) {
        this.top = top || 0;
        this.right = right || 0;
        this.bottom = bottom || 0;
        this.left = left || 0;
    }
}

class Padding {
    left: string;
    right: string;
    bottom: string;
    top: string;
    constructor(top?, right?, bottom?, left?) {
        this.top = top || 0;
        this.right = right || 0;
        this.bottom = bottom || 0;
        this.left = left || 0;
    }
}

export class MXBaseButtonComponent {
    @ViewChild('target') target;
    constructor(protected elementRef: ElementRef) {
    }
    private _width: number;
    private _height: number;
    private _margin: Margin = new Margin();
    private _padding: Padding = new Padding();
    get nativeElement() {
        return <HTMLElement>this.target.nativeElement;
    }
    get width() {
        this._width = this.nativeElement.offsetWidth;
        return this._width
    }
    set width(val) {
        this._width = val;
        this.nativeElement.style.width = val + 'px';
    }
    get height() {
        this._height = this.nativeElement.offsetHeight;
        return this._height;
    }
    set height(val) {
        this._height = val;
        this.nativeElement.style.height = val + 'px';
    }
    get margin() {
        this._margin.top = getComputedStyle(this.nativeElement).marginTop;
        this._margin.right = getComputedStyle(this.nativeElement).marginRight;
        this._margin.left = getComputedStyle(this.nativeElement).marginLeft;
        this._margin.bottom = getComputedStyle(this.nativeElement).marginBottom;
        return this._margin;
    }
    set margin(val: Margin) {
        this._margin = val;
        this.nativeElement.style.cssText = `margin:${val.top} ${val.right} ${val.bottom} ${val.left}`;
    }
    get padding() {
        this._padding.top = getComputedStyle(this.nativeElement).paddingTop;
        this._padding.right = getComputedStyle(this.nativeElement).paddingRight;
        this._padding.left = getComputedStyle(this.nativeElement).paddingLeft;
        this._padding.bottom = getComputedStyle(this.nativeElement).paddingBottom;
        return this._padding;
    }
    set padding(val: Padding) {
        this._padding = val;
        this.nativeElement.style.cssText = `padding:${val.top} ${val.right} ${val.bottom} ${val.left}`;
    }
}