import { Component } from '@angular/core';

@Component({
    selector: "[sample-layout]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"]
})
export class SampleLayout {
    
}

@Component({
    selector: "[sample-layout]",
    template: `<mx-layout><div sample-layout></mx-layout>`
})
export class MXSampleLayout {
    
}