import { Component } from '@angular/core';
import { ResLayouts } from './res-layouts';

@Component({
    selector: '[switch-layouts]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXSwitchToLayouts {
    res: Array<any> = ResLayouts;
}