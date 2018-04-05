import { Component, Input, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "[mx-win-layout-box]",
    templateUrl: "./template.html",
    styleUrls: ["./style.css"]
})
export class MXWinLayoutBox implements AfterContentChecked {
    @Input() layoutName: string;
    constructor(private router: Router) {

    }
    load() {

    }
    ngAfterContentChecked() {
        
    }
}