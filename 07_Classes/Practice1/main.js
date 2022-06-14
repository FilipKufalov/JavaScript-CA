class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}

class Person {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }

    get firstNameGet() {
        return this.firstname;
    }

    set firstNameSet(fname) {
        this.firstname = fname;
    }
}

let dog = new Dog("Java", "10", "black", "pug");


let person1 = new Person("John", "Doe");
let person2 = new Person("Jane", "Smith");

// person1.firstname = "John2";
// console.log(person1.fullname());
// console.log(person2.fullname());

class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }

    get getColor() {
        return this.color;
    }

    move() {
        console.log(`The Vehicle is moving at ${this.currentSpeed}`);
    }

    accelerate(amount) {
        if (this.currentSpeed < this.maxSpeed) {
            // this.currentSpeed++;
            this.currentSpeed += amount;
        } else {
            console.log("The vehicle is at max speed");
        }
    }
}

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("The motorcycle is doing a wheelie");
    }
}

let motor = new Motorcycle("red", 0, 250, "gas");
console.log(motor.color);
motor.move();