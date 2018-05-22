import { Component, ElementRef, ViewContainerRef, ViewChild } from '@angular/core';
import { Container } from 'common/models';

@Component({
    selector: 'container[general]',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})
export class GeneralContainer extends Container {
    @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
}