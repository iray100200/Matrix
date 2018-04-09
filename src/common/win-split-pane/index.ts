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
    protected nativeElement;
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
    bindEvents() {
        function movex(val: number, callback: Function) {
            let width = this.primarySide.nativeElement.offsetWidth + val;
            if (
                this.primarySide.minWidth < width &&
                this.primarySide.maxWidth > width
            ) {
                this.primarySide.nativeElement.style.width = this.sashElement.style.left =
                    width + "px";
                if (callback) callback(width);
            } else if (this.primarySide.maxWidth < width) {
                this.primarySide.nativeElement.style.width = this.sashElement.style.left =
                    this.primarySide.maxWidth + "px";
            } else if (this.primarySide.minWidth > width) {
                this.primarySide.nativeElement.style.width = this.sashElement.style.left =
                    this.primarySide.minWidth + "px";
            }
        }
        function movey(val: number, callback: Function) {
            let height = this.primarySide.nativeElement.offsetHeight + val;
            if (
                this.primarySide.minHeight < height &&
                this.primarySide.maxHeight > height
            ) {
                this.primarySide.nativeElement.style.height = this.sashElement.style.top =
                    height + "px";
                if (callback) callback(height);
            }
        }
        function moveTo() {
            switch (this.direction) {
                case "v":
                    movex.apply(this, arguments);
                    break;
                case "h":
                    movey.apply(this, arguments);
                    break;
                default:
                    movex.apply(this, arguments);
            }
        }
        this.sashElement.addEventListener("mousedown", e => {
            this.isMousedown = true;
            this.x = e.x;
            this.nativeElement.classList.add("move");
        });
        this.nativeElement.addEventListener("mousemove", e => {
            if (this.isMousedown) {
                this.destroy();
                this.animation = requestAnimationFrame(() => {
                    moveTo.call(this, e.x - this.x, () => {
                        this.x = e.x;
                    });
                });
            }
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
