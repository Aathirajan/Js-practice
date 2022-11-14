// Parent, Super, Base
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

// Child, Sub, Derived
class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = course;
    }

    getCourse = function() {
        console.log(this.course);
    }
}

// Child, Sub, Derived
class Mentor extends Person {
    constructor(args) {
        super(args.firstName, args.lastName);
        this.batch = args.batch;
    }

    getBatch = function() {
        console.log(this.batch);
    }
}

const student = new Student("Kishore", "Kumar", "MERN");
console.log(student);
const mentor = new Mentor({ firstName: "Tamil", lastName: "Sekar", batch: "B34WD-TAMIL" });
console.log(mentor);