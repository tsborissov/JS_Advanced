function solve() {
    class Figure {
        constructor(units = 'cm') {
            this._ratio = { 'm': 0.1, 'cm': 1, 'mm': 10 };
            this.units = units;
            this._k = this._ratio[this.units];
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius * this._k;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        changeUnits(units) {
            if (['m', 'cm', 'mm'].includes(units)) {
                this.radius = this.radius * this._ratio[units] / this._ratio[this.units];
                this.units = units;
            }
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width * this._k;
            this.height = height * this._k;
        }

        get area() {
            return this.height * this.width;
        }

        changeUnits(units) {
            if (['m', 'cm', 'mm'].includes(units)) {
                this.width = this.width * this._ratio[units] / this._ratio[this.units];
                this.height = this.height * this._ratio[units] / this._ratio[this.units];
                this.units = units;
            }
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
        
    }
}

const {Figure, Circle, Rectangle} = solve();

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString());// Figures units: cm Area: 78.53981633974483 - radius: 5

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4