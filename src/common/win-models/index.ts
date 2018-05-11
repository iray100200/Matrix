export class Color {
    r: number;
    g: number;
    b: number;
    alpha: number;
    constructor(r: number, g: number, b: number, a: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = a || 1;
    }
    stringify() {
        let c = this;
        return `rgba(${c.r}, ${c.g}, ${c.b}, ${c.alpha})`;
    }
    static parse(value: string | { r: number, g: number, b: number, a: number }) {
        if (typeof value === "string") {
            let [...val] = value.match(/[0-9\.]+/g).map(f => Number(f));
            return new Color(val[0], val[1], val[2], val[3]);
        } else {
            let { r, g, b, a } = value;
            return new Color(r, g, b, a);
        }
    }
}

export class Val {
    value: number;
    unit: string;
    constructor(value: number, unit: string) {
        this.value = value;
        this.unit = unit;
    }
    static parse(str: string) {
        let val = str.replace(/[^0-9.]*$/g, '');
        let unit = str.replace(/^[0-9.]*/g, '');
        return new Val(Number(val), unit);
    }
}

export class Margin {
    left: Val;
    right: Val;
    bottom: Val;
    top: Val;
    constructor(top?, right?, bottom?, left?) {
        this.top = top || 0;
        this.right = right || 0;
        this.bottom = bottom || 0;
        this.left = left || 0;
    }
}

export class Background {
    color: Color;
}

export class Padding {
    left: Val;
    right: Val;
    bottom: Val;
    top: Val;
    constructor(top?, right?, bottom?, left?) {
        this.top = top || 0;
        this.right = right || 0;
        this.bottom = bottom || 0;
        this.left = left || 0;
    }
}

export class Attribute {
    label: string;
    type: any;
    value: any;
    constructor(label, value, type) {
        this.label = label;
        this.type = type;
        this.value = value;
    }
}