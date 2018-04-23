import { Injectable, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/observable'

@Injectable()
export class MXDocumentServiceProvider {
    static MousedownEvent: Observable<any> = fromEvent(document, 'mousedown');
    static MosuemoveEvent: Observable<any> = fromEvent(document, 'mousemove');
    static MouseupEvent: Observable<any> = fromEvent(document, 'mouseup');
}

@Injectable() 
export class MXComponentServiceProvider {
    static event: EventEmitter<any> = new EventEmitter();
    emit(value?: any) {
        MXComponentServiceProvider.event.emit(value);
    }
    subscribe(fn: Function) {
        MXComponentServiceProvider.event.subscribe(fn);
    }
}