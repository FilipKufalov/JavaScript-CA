class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

let person1 = new Person("John", "Doe");
let person2 = new Person("Jane", "Smith");

console.log(person1.fullname());
console.log(person2.fullname());