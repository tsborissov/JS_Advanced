class Stringer {
    constructor(initialString, initialLength) {
        this.innerString = initialString;
        this.innerLength = initialLength;
        this.output = '';
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) this.innerLength = 0;
    }

    toString() {
        if (this.innerLength == 0) {
            this.output = '...';
        } else if (this.innerString.length <= this.innerLength) {
            this.output = this.innerString;
        } else {
            this.output = this.innerString.substring(0, this.innerLength) + '...';
        }
        return this.output;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
