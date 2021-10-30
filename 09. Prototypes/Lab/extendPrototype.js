class Person {
    constructor(name, email) {
        this.name = name,
        this.email = email
    }

    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

function extend(classDefinition) {
    classDefinition.prototype.species = 'Human';
    classDefinition.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

extend(Person);
const p = new Person('Pesho', 'pesho@email.com');
console.log(p.toString());
console.log(p.species);
console.log(p.toSpeciesString());