import { Component, ViewChild, Input, EventEmitter, ViewEncapsulation, AfterContentChecked, ElementRef, ViewChildren, AfterViewInit } from "@angular/core";

@Component({
    selector: "[mx-win-number-picker]",
    styleUrls: ["./style.css"],
    templateUrl: "./template.html",
    encapsulation: ViewEncapsulation.None
})
export class MXWinNumberPicker implements AfterContentChecked {
    @ViewChild("element") element: ElementRef;
    @ViewChild("dropdown") dropdown: ElementRef;
    @Input() min = 0;
    @Input() max = 1024;
    @Input() isChild: boolean = false;
    private _value;
    private event: EventEmitter<any> = new EventEmitter();
    @Input() label: string;
    @Input() get value() {
        return this._value || 0;
    }
    set value(val: any) {
        this._value = val || 0;
        this.element.nativeElement.value = this._value;
        this.event.emit(this._value);
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
                this.value = 0;
            } else if (value > this.max) {
                this.value = this.max;
            }
            return e.preventDefault();
        }
        this.value = value;
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
        let value = this._value + (e.wheelDeltaY > 0 ? 1 : -1);
        if (this.isValueInvalid(value)) {
            return e.preventDefault();
        }
        this.value = value;
    }
    subscribe(next: Function, error?: Function, complete?: Function) {
        return this.event.subscribe(next, error, complete);
    }
    ngAfterContentChecked() {
        if (this.dropdown.nativeElement.value === "%") {
            this.min = 0;
            this.max = 100;
        }
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