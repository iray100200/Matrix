import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Router, RouterState, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observer, PartialObserver } from 'rxjs/Observer';
import 'rxjs/add/operator/filter';

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

@Injectable()
export class MXRouterService {
    location: string;
    routerConfig: Array<any>;
    constructor(private router: Router) {
        this.routerConfig = router.config;
    }
    subscribe(fn: any) {
        return this.router.events.filter(event => event instanceof NavigationEnd).subscribe({
            next: fn
        });
    }
}