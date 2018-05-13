import { Margin, Padding, Color, Val, Background } from './models';
import { ElementRef, ViewChild, Injectable } from '@angular/core';

export abstract class Button {
    @ViewChild('target') target;
    constructor(protected elementRef: ElementRef) { }
    private _width: Val;
    private _height: Val;
    private _margin: Margin = new Margin();
    private _padding: Padding = new Padding();
    private _background: Background = new Background();
    get nativeElement() {
        return <HTMLElement>this.target.nativeElement;
    }
    get width() {
        this._width = this._width || new Val(this.nativeElement.offsetWidth, 'px');
        return this._width;
    }
    set width(val) {
        this._width = val;
        this.nativeElement.style.width = val.stringify();
    }
    get height() {
        this._height = this._height || new Val(this.nativeElement.offsetHeight, 'px');
        return this._height;
    }
    set height(val) {
        this._height = val;
        this.nativeElement.style.height = val.stringify();
    }
    get background() {
        this._background.color =  this._background.color || Color.parse(getComputedStyle(this.nativeElement, null).backgroundColor);
        return this._background;
    }
    set background(val) {
        this._background.color = val.color;
        this.nativeElement.style.backgroundColor = `${val.color.stringify()}`;
    }
    get margin() {
        this._margin.top = this._margin.top || Val.parse(getComputedStyle(this.nativeElement).marginTop);
        this._margin.right = this._margin.bottom || Val.parse(getComputedStyle(this.nativeElement).marginRight);
        this._margin.left = this._margin.left || Val.parse(getComputedStyle(this.nativeElement).marginLeft);
        this._margin.bottom = this._margin.bottom || Val.parse(getComputedStyle(this.nativeElement).marginBottom);
        return this._margin;
    }
    set margin(val: Margin) {
        this._margin = val;
        this.nativeElement.style.margin = `${val.top.stringify()} ${val.right.stringify()} ${val.bottom.stringify()} ${val.left.stringify()}`;
    }
    get padding() {
        this._padding.top = this._padding.top || Val.parse(getComputedStyle(this.nativeElement).paddingTop);
        this._padding.right = this._padding.right || Val.parse(getComputedStyle(this.nativeElement).paddingRight);
        this._padding.left = this._padding.left || Val.parse(getComputedStyle(this.nativeElement).paddingLeft);
        this._padding.bottom = this._padding.bottom || Val.parse(getComputedStyle(this.nativeElement).paddingBottom);
        return this._padding;
    }
    set padding(val: Padding) {
        this._padding = val;
        this.nativeElement.style.padding = `${val.top.stringify()} ${val.right.stringify()} ${val.bottom.stringify()} ${val.left.stringify()}`;
    }
}