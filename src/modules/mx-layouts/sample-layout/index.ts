import { Component } from '@angular/core';

@Component({
    selector: "[sample-layout]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"]
})
export class SampleLayout {
    
}

@Component({
    selector: "[mx-sample-layout]",
    template: `<mx-layout><div sample-layout></div></mx-layout>`
})
export class MXSampleLayout {
    
}