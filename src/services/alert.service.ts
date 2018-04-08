import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AlertServiceProvider {
    private event: EventEmitter<any> = new EventEmitter();
    subscribe(next?, error?, complete?) {
        return this.event.subscribe(next, error, complete);
    }
    emit(value?: any) {
        this.event.emit(value);
    }
}