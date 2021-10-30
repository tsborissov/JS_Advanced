function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject= subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

const result = personAndTeacher();
const p = new result.Person('Pesho', 'p@email.com');
const t = new result.Teacher('Ivan', 'i@email.com', 'Math');
console.log(p);
console.log(t);