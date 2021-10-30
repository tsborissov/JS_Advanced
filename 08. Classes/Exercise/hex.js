class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        return new Hex(this.value + number);
    }

    minus(number) {
        return new Hex(this.value - number);
    }

    parse(input) {
        return parseInt(Number('0x' + input), 10);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1) // == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
let c = new Hex(256);
let d = new Hex(2);
console.log(c.minus(d).toString());
console.log(FF.parse('AAA'));
