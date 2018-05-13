import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { MXComponentServiceProvider } from '../../../common/win-services';

@Component({
    selector: "[guidance]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"]
})
export class GuidanceLayout {
    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
    constructor() {

    }
    path: 'modules/mx-layouts/guidance'
}