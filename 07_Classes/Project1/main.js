class Person {
    constructor(firstname, lastname, yearsWorked) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.yearsWorked = yearsWorked;
    }
}

let arrayOfPersons = [];
let person1 = new Person("John", "Doe", 10);
let person2 = new Person("Jane", "Smith", 3);

arrayOfPersons.push(person1, person2);


Person.prototype.bio = function () {
    return `${this.firstname} ${this.lastname} has worked here for ${this.yearsWorked} years`;
}

arrayOfPersons.forEach(element => {
    console.log(element.bio());
});