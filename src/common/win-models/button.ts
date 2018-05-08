import { Margin, Padding, Color, Val, Background } from './index';
import { ElementRef, ViewChild } from '@angular/core';

export class Button {
    @ViewChild('target') target;
    constructor(protected elementRef: ElementRef) {
    }
    private _width: number;
    private _height: number;
    private _margin: Margin = new Margin();
    private _padding: Padding = new Padding();
    private _background: Background = new Background();
    get nativeElement() {
        return <HTMLElement>this.target.nativeElement;
    }
    get width() {
        this._width = this.nativeElement.offsetWidth;
        return this._width
    }
    get background() {
        this._background.color = Color.parse(getComputedStyle(this.nativeElement).backgroundColor)
        return this._background;
    }
    set background(val) {
        this._background.color = val.color;
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
        this._margin.top = Val.parse(getComputedStyle(this.nativeElement).marginTop);
        this._margin.right = Val.parse(getComputedStyle(this.nativeElement).marginRight);
        this._margin.left = Val.parse(getComputedStyle(this.nativeElement).marginLeft);
        this._margin.bottom = Val.parse(getComputedStyle(this.nativeElement).marginBottom);
        return this._margin;
    }
    set margin(val: Margin) {
        this._margin = val;
        this.nativeElement.style.cssText = `margin:${val.top} ${val.right} ${val.bottom} ${val.left}`;
    }
    get padding() {
        this._padding.top = Val.parse(getComputedStyle(this.nativeElement).paddingTop);
        this._padding.right = Val.parse(getComputedStyle(this.nativeElement).paddingRight);
        this._padding.left = Val.parse(getComputedStyle(this.nativeElement).paddingLeft);
        this._padding.bottom = Val.parse(getComputedStyle(this.nativeElement).paddingBottom);
        return this._padding;
    }
    set padding(val: Padding) {
        this._padding = val;
        this.nativeElement.style.cssText = `padding:${val.top} ${val.right} ${val.bottom} ${val.left}`;
    }
    set backgroundColor(color: Color) {
        
    }
}