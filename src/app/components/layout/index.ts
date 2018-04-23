import { Component, ViewChild, OnInit, ElementRef, ViewContainerRef, Input } from '@angular/core';
import * as ResJson from './res.json';
import { MXService } from '../../../services/mx.service';

@Component({
    selector: '[mx-app-layout]',
    templateUrl: './template.html',
    styleUrls: ['./style.scss']
})
export class MXLayoutComponent implements OnInit {
    resJson: Array<any> = <any>ResJson;
    private resize: number = 0;
    component;
    @ViewChild('virtualWin') virtualWin: ElementRef;
    @ViewChild('templateHost', { read: ViewContainerRef }) templateHost;
    ngOnInit() {
        window.addEventListener('resize', () => {
            this.resize++;
        });
    }
    get vwidth(): number {
        return this.virtualWin.nativeElement.offsetWidth;
    }
    get vheight(): number {
        return this.virtualWin.nativeElement.offsetHeight;
    }
}