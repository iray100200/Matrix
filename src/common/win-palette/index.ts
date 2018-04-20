import { Component } from '@angular/core';

@Component({
    selector: '[mx-win-palette]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXWinPalette {
    private constructor() {

    }
    private instance: MXWinPalette;
    public getInstance() {
        if (!this.instance) {
            this.instance = new MXWinPalette();
        }
        return this.instance;
    }
}