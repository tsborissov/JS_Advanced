const { Person } = require('./person');

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

console.log(person instanceof Person);
console.log(person instanceof Object);
console.log(person instanceof String);
console.log(person instanceof Number);
console.log(person instanceof Array);