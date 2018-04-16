import { Component } from '@angular/core';

@Component({
    selector: "[guidance]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"]
})
export class GuidanceLayout {
    path: 'modules/mx-layouts/guidance'
}

@Component({
    selector: "[mx-guidance]",
    template: '<mx-layout><div guidance></div></mx-layout>'
})
export class MXGuidanceLayout extends GuidanceLayout {

}