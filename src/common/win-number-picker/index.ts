import { Component, ViewChild, Input, Output, EventEmitter, ViewEncapsulation, AfterContentChecked, ElementRef, ViewChildren, AfterViewInit } from "@angular/core";
import { Val } from '../win-models';

@Component({
    selector: "[mx-win-number-picker]",
    styleUrls: ["./style.css"],
    templateUrl: "./template.html",
    encapsulation: ViewEncapsulation.None
})
export class MXWinNumberPicker implements AfterContentChecked {
    private _value: Val = new Val(0, 'px');
    @ViewChild("element") element: ElementRef;
    @ViewChild("dropdown") dropdown: ElementRef;
    @Input() min = 0;
    @Input() max = 1024;
    @Input() isChild: boolean = false;
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Input() label: string;
    @Input() get value() {
        return this._value;
    }
    set value(val: Val) {
        this.evalue = val.value;
    }
    set evalue(val: number) {
        this._value.value = val;
        this.element.nativeElement.value = val;
        this.change.emit(new Val(val, this.dropdown.nativeElement.value));
    }
    get symbol() {
        return this.dropdown.nativeElement.value;
    }
    private isValueInvalid(value) {
        return value < this.min || value > this.max;
    }
    handleInput(e: KeyboardEvent) {
        let value = parseInt(String((<HTMLInputElement>e.currentTarget).value).replace(/[a-z]/gi, "")) || 0;
        if (this.isValueInvalid(value)) {
            if (value < this.min) {
                this.value.value = 0;
            } else if (value > this.max) {
                this.value.value = this.max;
            }
            return e.preventDefault();
        }
        this.evalue = value;
    }
    defaultKeyCodes: Array<number> = [
        8,37, 38, 39, 40, 46
    ];
    handleKeydown(e: KeyboardEvent) {
        let keyCode = e.keyCode;
        if (
            this.defaultKeyCodes.indexOf(keyCode) > -1 ||
            (keyCode >= 48 && keyCode <= 57) ||
            (keyCode >= 96 && keyCode <= 105)
        ) {
            return;
        } else {
            e.preventDefault()
        }
    }
    handleMousewheel(e: WheelEvent) {
        let value = this._value.value + (e.wheelDeltaY > 0 ? 1 : -1);
        if (this.isValueInvalid(value)) {
            return e.preventDefault();
        }
        this.evalue = value;
    }
    subscribe(next: Function, error?: Function, complete?: Function) {
        return this.change.subscribe(next, error, complete);
    }
    ngAfterContentChecked() {
        
    }
}

@Component({
    selector: '[mx-win-number-picker-group]',
    styleUrls: ['./style.group.css', './style.css'],
    templateUrl: './template.group.html',
    encapsulation: ViewEncapsulation.None
})
export class MXWinNumberPickerGroup implements AfterViewInit{
    @ViewChildren('children') children;
    label: string;
    className: string;
    attributes: Array<any> = [];
    showMore: boolean = false;
    private event: EventEmitter<any> = new EventEmitter();
    private _value: any;
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        for (var a in val) {
            let r = val[a];
            this.attributes.push({
                label: a,
                value: parseInt(r.replace(/[^0-9]/ig, '')),
                symbol: r.replace(/[0-9]/ig, '')
            })
        }
    }
    subscribe (fn: Function){
        return this.event.subscribe(fn);
    }
    handleShowOrHide() {
        this.showMore = !this.showMore;
    }
    ngAfterViewInit() {
        this.children.forEach(f => {
            f.subscribe(t => {
                this.event.emit({
                    attribute: f.label,
                    value: f.value + f.symbol
                });
            })
        })
    }
}