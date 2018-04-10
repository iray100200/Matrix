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
    constructor() {
    }
    ngOnInit() {
        
    }
    get vwidth(): number {
        return this.virtualWin.nativeElement.offsetWidth;
    }
    get vheight(): number {
        return this.virtualWin.nativeElement.offsetHeight;
    }
}