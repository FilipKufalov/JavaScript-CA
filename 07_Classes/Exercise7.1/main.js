class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    personDescription() {
        return `${this.firstname} ${this.lastname}`;
    }
}

let p = new Person("John", "Doe");
console.log(p);
console.log(p.personDescription());