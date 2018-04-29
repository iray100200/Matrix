import { Component, ViewChild, Input, EventEmitter } from "@angular/core";

@Component({
    selector: "[mx-win-number-picker]",
    styleUrls: ["./style.css"],
    templateUrl: "./template.html"
})
export class MXWinNumberPicker {
    @ViewChild("element") element;
    @Input() min = 0;
    @Input() max = 1024;
    @Input() isChild: boolean = false;
    private _value;
    private event: EventEmitter<any> = new EventEmitter();
    label: string;
    get value() {
        return this._value || 0;
    }
    set value(val: any) {
        this._value = val || 0;
        this.element.nativeElement.value = this._value;
        this.event.emit(this._value);
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
        let value = this._value + e.wheelDeltaY / 120;
        if (this.isValueInvalid(value)) {
            return e.preventDefault();
        }
        this.value = value;
    }
    subscribe(next: Function, error?: Function, complete?: Function) {
        return this.event.subscribe(next, error, complete);
    }
}

@Component({
    selector: '[mx-win-number-picker-group]',
    styleUrls: ['./style.group.css', './style.css'],
    template: `<div class="number-picker-group">
        <div *ngIf="label" class="text">{{label}}</div>
        <div class="group">
            <div mx-win-number-picker *ngFor="let item of attributes" [isChild]="true" #numberPickerGroup></div>
        </div>
    </div>`
})
export class MXWinNumberPickerGroup {
    label: string;
    className: string;
    attributes: Array<any> = [];
    private _value: any;
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        for (var a in val) {
            this.attributes.push({
                a: val[a]
            })
        }
    }
}