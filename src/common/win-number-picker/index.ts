import { Component, ViewChild, Input, EventEmitter } from "@angular/core";

@Component({
    selector: "[mx-win-number-picker]",
    styleUrls: ["./style.css"],
    templateUrl: "./template.html"
})
export class MXWinNumberPicker {
    @ViewChild("element") element;
    private _value;
    private event: EventEmitter<any> = new EventEmitter();
    @Input() min = 0;
    @Input() max = 1024;
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
        let value = this.value.replace(/[a-z]/gi, "");
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
    handleKeydown(e: KeyboardEvent) {
        let keyCode = e.keyCode;
        if (
            keyCode == 8 ||
            keyCode == 46 ||
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
