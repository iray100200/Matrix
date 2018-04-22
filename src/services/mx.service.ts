import { Injectable, EventEmitter, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Config from '../config';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/observable'
import { map } from 'rxjs/operators';

@Injectable()
export class MXService {
    static MousedownEvent: Observable<any> = fromEvent(document, 'mousedown');
    static MosuemoveEvent: Observable<any> = fromEvent(document, 'mousemove');
    static MouseupEvent: Observable<any> = fromEvent(document, 'mouseup');
    static HostLoaderEvent: EventEmitter<any> = new EventEmitter();
    constructor(private httpClient: HttpClient, private componentFactoryResolver: ComponentFactoryResolver) {

    }
    transform(reqOpts) {
        return this.httpClient.post(Config.BASE_HREF.concat('/api/mx/gen'), reqOpts);
    }
    load(component: any) {
        MXService.HostLoaderEvent.emit({
            target: this.componentFactoryResolver.resolveComponentFactory(component)
        });
    }
}