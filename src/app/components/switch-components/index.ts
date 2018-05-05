import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MXComponentServiceProvider } from 'common/services';
import { MXWinComponentBox } from "../../../common/win-component-box";
import { ResComponents } from './res-components';

@Component({
    selector: '[switch-components]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXSwitchToComponents implements AfterViewInit {
    @ViewChildren('components') components: QueryList<MXWinComponentBox>;
    res: Array<any> = ResComponents;
    constructor(private componentServiceProvider: MXComponentServiceProvider) {

    }
    ngAfterViewInit() {
        this.components.map(t => {
            return t.subscribe(f => {
                this.componentServiceProvider.emit({
                    target: f,
                    type: 'component'
                });
            })
        })
    }
}