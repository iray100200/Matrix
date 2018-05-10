import { Component, Input, Output, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
import { MXDocumentServiceProvider as documentService } from '../win-services';
import { Color } from '../win-models';

@Component({
    selector: '[mx-win-palette]',
    templateUrl: './template.html',
    styleUrls: ['./style.css'],
    encapsulation: ViewEncapsulation.None
})
export class MXWinPalette implements AfterViewInit {
    @Input() x: number = 0;
    @Input() y: number = 0;
    @Input() align: string = "left";
    @Input() color: string = 'transparent';
    get xPosition() {
        return this.align === "right" ? {
            right: this.x + 'px'
        } : {
            left: this.x + 'px'
        }
    }
    @ViewChild('head') head: ElementRef;
    @Output() move: EventEmitter<any> = new EventEmitter();
    @Output() update: EventEmitter<any> = new EventEmitter();
    @Output() close: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<any> = new EventEmitter();
    presetColors: Array<string> = ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B'];
    private get element() {
        return this.elementRef.nativeElement.firstChild;
    }
    get width() {
        return this.element.offsetWidth;
    }
    get height() {
        return this.element.offsetHeight;
    }
    constructor(private elementRef: ElementRef) {
        
    }
    private getXSize(ex, cx) {
        return this.align === "right" ? -ex + cx : ex - cx;
    }
    private registerEvents() {
        let animation = null, me = this;
        let width = this.width, height = this.height;
        let clientWidth = document.documentElement.clientWidth, clientHeight = document.documentElement.clientHeight;
        let ex: number, ey: number, tx: number, ty: number, isMousedown: boolean = false;
        this.head.nativeElement.addEventListener('mousedown', (e: MouseEvent) => {
            ex = e.x;
            ey = e.y;
            tx = this.x || 0;
            ty = this.y || 0;
            isMousedown = true;
        });
        documentService.MosuemoveEvent.subscribe(e => {
            if (isMousedown) {
                let xsize = this.getXSize(e.x, ex), ysize = e.y - ey;
                if (animation) {
                    cancelAnimationFrame(animation);
                    animation = null;
                }
                animation = requestAnimationFrame(() => {
                    xsize = e.x < 0 ? this.getXSize(0, ex) : (e.x > clientWidth ? this.getXSize(clientWidth, ex) : xsize);
                    ysize = e.y < 0 ? -ey : (e.y > clientHeight ? clientHeight - ey : ysize);
                    this.x = tx + xsize;
                    this.y = ty + ysize;
                });
            }
        });
        documentService.MouseupEvent.subscribe(e => {
            isMousedown = false;
            this.move.emit({ x: this.x, y: this.y });
        });
    }
    ngAfterViewInit() {
        this.registerEvents();
    }
    handleChange(e) {
        this.color = Color.parse(e.color.rgb).stringify();
        this.update.emit(this.color);
    }
    handleChangeComplete(e) {
        console.log(e, 'complete')
    }
    handleSave(e) {
        this.save.emit(this.color);
    }
    handleClose(e) {
        this.close.emit();
    }
}