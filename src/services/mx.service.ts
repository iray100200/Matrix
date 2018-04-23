import { Injectable, EventEmitter, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Config from '../config';

@Injectable()
export class MXService {
    constructor(private httpClient: HttpClient, private componentFactoryResolver: ComponentFactoryResolver) {

    }
    transform(reqOpts) {
        return this.httpClient.post(Config.BASE_HREF.concat('/api/mx/gen'), reqOpts);
    }
}