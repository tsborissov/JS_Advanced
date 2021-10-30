function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return super.toString().slice(0, -1) + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return super.toString().slice(0, -1) + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

const result = toStringExtension();

const p = new result.Person('Pesho', 'p@email.com');
console.log(p.toString());

const t = new result.Teacher('Ivanov', 'i@email.com', 'Math');
console.log(t.toString());

const s = new result.Student('Gosho', 'g@email.com', 'OOP');
console.log(s.toString());