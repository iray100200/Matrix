import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MXComponentServiceProvider } from 'common/services';
import { MXWinComponentBox } from "../../../common/win-component-box";
import { ResContainers } from './res-containers';

@Component({
    selector: '[switch-containers]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class MXSwitchToContainers implements AfterViewInit {
    @ViewChildren('components') components: QueryList<MXWinComponentBox>;
    res: Array<any> = ResContainers;
    constructor(private componentServiceProvider: MXComponentServiceProvider) {

    }
    ngAfterViewInit() {
        this.components.map(t => {
            return t.subscribe(f => {
                this.componentServiceProvider.emit('component', {
                    target: f
                });
            })
        })
    }
}