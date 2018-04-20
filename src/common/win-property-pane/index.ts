import { Component } from '@angular/core';

@Component({
    selector: '[mx-win-property-pane]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXWinPropertyPane {
    stylesAttributes: Array<any> = [
        {
            name: "背景颜色",
            value: "#000000"
        },
        {
            name: "尺寸",
            value: "100"
        },
        {
            name: "边框样式",
            value: "固定"
        }
    ];
}