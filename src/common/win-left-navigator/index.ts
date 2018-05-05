import { Component, OnInit, ViewChildren, AfterViewInit, Directive, Input, QueryList, ElementRef, EventEmitter } from '@angular/core';
import * as ResJson from './res.json';
import { Observable, Observer } from 'Rxjs';

export const Events = new EventEmitter();

export const Utils = {
    cache: new Map(),
    getNavItem: function(name: string) {
        const item = Utils.cache.has(name) ? Utils.cache.get(name) : Utils.cache.set(name, (<any>ResJson).find(m => {
            return m.name === name;
        }));
        return function(propertyName?: string) {
            return propertyName ? item[propertyName] : item;
        }
    },
    getEventType: function(eventName: string) {
        return eventName.replace(/on([a-zA-Z]+)/, '$1').toLowerCase();
    },
    getNavState: function(name: string) {
        return Utils.getNavItem(name)("state");
    }
}

@Directive({
    selector: '[nav-item-name]',
    inputs: ['nav-item-name']
})
export class MXWinLeftNavigatorDirective implements AfterViewInit {
    public nativeElement: HTMLElement;
    public state: any;
    constructor(private element: ElementRef) {
        this.nativeElement = element.nativeElement;
    }
    ngAfterViewInit() {
        this.state = Utils.getNavState(this['nav-item-name']) || {};
        this.state = Object.assign(this.state, this.state.default);
    }
}

@Component({
    selector: '[mx-win-left-nav]',
    templateUrl: './template.html',
    styleUrls: ['style.css']
})
export class MXWinLeftNavigator implements OnInit, AfterViewInit {
    menuList: Array<any> = <any>ResJson;
    state = {
        expanded: false
    };
    @Input() currentSelectedIndex: number = 0;
    @ViewChildren(MXWinLeftNavigatorDirective) itemList: QueryList<MXWinLeftNavigatorDirective>;
    constructor(protected elementRef: ElementRef) {
        this.menuList.map((m) => {
            m.href = m.href || null;
            return m;
        });
    }
    ngOnInit() {

    }
    operateItemSelect() {

    }
    operateFrames() {
        Events.emit({
            key: 'FRAMES'
        });
    }
    operateComponents() {
        Events.emit({
            key: 'COMPONENTS'
        });
    }
    operateExpandOrCollapse(element, event) {
        element.state.expanded = !element.state.expanded;
        this.state.expanded = element.state.expanded;
    }
    ngAfterViewInit() {
        this.itemList.forEach(((element: MXWinLeftNavigatorDirective) => {
            let name = element["nav-item-name"];
            let events = Utils.getNavItem(name)('events');
            for (var event in events) {
                let eventType = Utils.getEventType(event);
                ((target, _fn) => {
                    _fn in target ? element.nativeElement.addEventListener(eventType, target[_fn].bind(this, element)) : null;
                })(this, events[event])
            }
        }))
    }
}