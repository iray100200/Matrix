import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import * as ResJson from './res.json';

@Component({
    selector: '[mx-app-layout]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXLayoutComponent implements OnInit {
    resJson: Array<any> = <any>ResJson;
    @ViewChild('virtualWin') virtualWin: ElementRef;
    width: number = 0;
    height: number = 0;
    constructor() {
    }
    ngOnInit() {
        this.width = this.virtualWin.nativeElement.offsetWidth;
        this.height = this.virtualWin.nativeElement.offsetHeight;
    }
}