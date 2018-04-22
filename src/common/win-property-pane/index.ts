import { Component, ViewChildren, AfterViewInit } from '@angular/core';
import { MXWinColorSelector } from '../win-color-selector';

@Component({
    selector: '[mx-win-property-pane]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXWinPropertyPane implements AfterViewInit {
    @ViewChildren('winColorSelector') selectors: Array<MXWinColorSelector>;
    private clickedItem: HTMLElement;
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
    ngAfterViewInit() {
        this.selectors.forEach(element => {
            element.SelectEvent.subscribe(t => {
                this.clickedItem.classList.add('selected');
            })
        });
    }
    handleItemClick(e) {
        this.clickedItem = e.currentTarget;
    }
}