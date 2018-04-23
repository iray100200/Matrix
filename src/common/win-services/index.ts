import { Injectable, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/observable'

@Injectable()
export class DocumentServiceProvider {
    static MousedownEvent: Observable<any> = fromEvent(document, 'mousedown');
    static MosuemoveEvent: Observable<any> = fromEvent(document, 'mousemove');
    static MouseupEvent: Observable<any> = fromEvent(document, 'mouseup');
}