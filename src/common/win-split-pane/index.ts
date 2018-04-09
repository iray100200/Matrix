import {
    Directive,
    Component,
    Input,
    ElementRef,
    OnInit,
    AfterViewInit,
    ViewChild,
    ContentChild
} from "@angular/core";

class MXWinSplitPaneChildDirective {
    nativeElement;
    protected direction: string;
    @Input() minWidth: number = 0;
    @Input() minHeight: number = 0;
    @Input() maxWidth: number = 0;
    @Input() maxHeight: number = 0;
    constructor(elementRef: ElementRef) {
        this.nativeElement = elementRef.nativeElement;
    }
    get width(): string {
        return this.nativeElement.offsetWidth + "px";
    }
    get height(): string {
        return this.nativeElement.offsetHeight + "px";
    }
    init(direction: string) {
        this.direction = direction;
    }
}

@Directive({ selector: "[mx-win-primary-side]" })
export class MXWinPrimarySide extends MXWinSplitPaneChildDirective
    implements AfterViewInit {
    @Input() entryWidth: number = 0;
    @Input() entryHeight: number = 0;
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }
    ngAfterViewInit() {
        this.nativeElement.style.width =
            (this.entryWidth || this.minWidth || 200) + "px";
    }
}

@Directive({ selector: "[mx-win-secondary-side]" })
export class MXWinSecondarySide extends MXWinSplitPaneChildDirective {
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }
}

@Component({
    selector: "[mx-win-split-pane]",
    styleUrls: ["./style.css"],
    templateUrl: "./template.html",
    queries: {
        primarySide: new ContentChild(MXWinPrimarySide),
        secondarySide: new ContentChild(MXWinSecondarySide)
    }
})
export class MXWinSplitPane implements OnInit, AfterViewInit {
    @Input() direction: string = "v";
    @ViewChild("context") context: ElementRef;
    @ViewChild("sash") sashRef: ElementRef;
    private nativeElement: HTMLElement;
    private sashElement: HTMLElement;
    private isMousedown: boolean = false;
    private x: number;
    private y: number;
    private animation;
    primarySide: MXWinPrimarySide;
    secondarySide: MXWinSecondarySide;
    constructor() {}
    private move(direction): Function {
        let elm = this.primarySide.nativeElement;
        let { minWidth, maxWidth, minHeight, maxHeight } = this.primarySide;
        let pelm = this.primarySide.nativeElement;
        let selm = this.sashElement;
        let min, max, wh, lt;
        direction === 'x' ? (min = minWidth, max = maxWidth, wh = 'width', lt = 'left') : direction === 'y' ? (min = minHeight, max = maxHeight, wh = 'height', lt = 'top') : () => { throw `Invaild param direction: ${direction}` };
        function set (v) {
            pelm.style[wh] = selm.style[lt] = v + "px";
        }
        function compare (v, callback: Function = () => {}) {
            if (min <= v && max >= v) {
                set(v);
                callback();
            } else if (max < v) {
                set(max);
            } else if (min > v) {
                set(min);
            }
        }
        return function(value: number, callback?: Function) {
            let ofs = direction === 'x' ? elm.offsetWidth : elm.offsetHeight;
            let val = ofs + value;
            compare(val, callback);
        }
    }
    bindEvents() {
        let moveX = this.move('x'), moveY = this.move('y');
        this.sashElement.addEventListener("mousedown", e => {
            this.isMousedown = true;
            this.x = e.x;
            this.nativeElement.classList.add("move");
        });
        this.nativeElement.addEventListener("mousemove", e => {
            if (this.isMousedown) {
                this.destroy();
                this.animation = requestAnimationFrame(() => {
                    moveX(e.x - this.x, () => {
                        this.x = e.x;
                    });
                });
            }
            e.preventDefault();
        });
        this.nativeElement.addEventListener("mouseup", () => {
            this.destroy();
            this.isMousedown = false;
            this.nativeElement.classList.remove("move");
        });
    }
    destroy() {
        if (this.animation) {
            cancelAnimationFrame(this.animation);
            this.animation = null;
        }
    }
    private init() {
        this.primarySide.init(this.direction);
        this.secondarySide.init(this.direction);
        !/relative|absolute/.test(getComputedStyle(this.nativeElement).position)
            ? (this.nativeElement.style.position = "relative")
            : null;
    }
    ngOnInit() {
        this.nativeElement = this.context.nativeElement;
        this.sashElement = this.sashRef.nativeElement;
    }
    ngAfterViewInit() {
        this.init();
        this.bindEvents();
    }
    get sashStyle() {
        return this.direction === "v"
            ? {
                  left: this.primarySide.width
              }
            : {
                  top: this.primarySide.height
              };
    }
}