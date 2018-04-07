import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import * as ResJson from './res.json';
import { RouterConfig } from '../../../common/win-layouts';

@Component({
    selector: '[mx-app-layout]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXLayoutComponent {
    resJson: Array<any> = <any>ResJson;
    @ViewChild('virtualWin') virtualWin;
    constructor(private router: Router) {
        this.router.resetConfig(this.router.config.concat(RouterConfig));
    }
}