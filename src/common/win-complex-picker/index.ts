import { Component, ViewChildren, QueryList, AfterViewInit, EventEmitter, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { Color, Val, Attribute } from '../win-models';

@Component({
    selector: '[mx-win-complex-picker]',
    styleUrls: ['./style.css'],
    templateUrl: './template.html',
    encapsulation: ViewEncapsulation.None
})
export class MXWinComplexPicker implements AfterViewInit {
    attributes: Array<Attribute> = [];
    @Input() label: string = "Property";
    showDetails: boolean = false;
    _value: any;
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        for (var a in val) {
            let r = val[a];
            this.attributes.push(new Attribute(a, r, this.getType(r)))
        }
    }
    getType(val) {
        if (val instanceof Color) {
            return "color";
        }
        if (val instanceof Val) {
            return "val";
        }
    }
    private event: EventEmitter<any> = new EventEmitter();
    @ViewChildren('children') children: QueryList<any>;
    subscribe(fn: Function) {
        return this.event.subscribe(fn);
    }
    handleShowOrHide() {
        this.showDetails = !this.showDetails;
    }
    onColorChange(e) {
        this.event.emit({
            value: Color.parse(e),
            attribute: 'color'
        })
    }
    ngAfterViewInit() {
        console.log(this.value);
        this.children.forEach(f => {

        })
    }
}