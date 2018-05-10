import { Component, ViewChild, Directive, EventEmitter, Output, Input } from '@angular/core';
import { MXWinPalette } from '../win-palette';

@Component({
    selector: '[mx-win-color-picker]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXWinColorPicker {
    @Input() color: string = 'transparent';
    @Input() showPalette: boolean = false;
    @Output() change: EventEmitter<any> = new EventEmitter();
    @ViewChild('palette', { read: MXWinPalette }) palette;
    private _palette_x: number;
    private _palette_y: number;
    palette_alignment = 'right';
    get palette_x() {
        return this._palette_x || 0;
    }
    get palette_y() {
        return this._palette_y || 5;
    }
    set palette_x(x) {
        this._palette_x = x;
    }
    set palette_y(y) {
        this._palette_y = y;
    }
    onClick(e) {
        this.showPalette = !this.showPalette;
    }
    onPaletteMove(e) {
        this.palette_x = e.x;
        this.palette_y = e.y;
    }
    onPaletteUpdate(e) {
        this.color = e;
    }
    onPaletteClose() {
        this.showPalette = false;
    }
    onPaletteSave(e) {
        this.change.emit(this.color);
    }
    subscribe(fn: Function) {
        return this.change.subscribe(fn);
    }
}