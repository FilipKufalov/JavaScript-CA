class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    printAnimal() {
        console.log(`The ${this.species} says ${this.sound}`);
    }
}

Animal.prototype.printFly = function () {
    switch (this.species) {
        case 'cow':
            console.log(`The ${this.species} can't fly`);
            break;
        case 'owl':
            console.log(`The ${this.species} can fly`);
            break;
    }
}

let cow = new Animal('cow', 'moo');
let owl = new Animal('owl', 'hoot');

cow.printAnimal();
cow.printFly();

owl.printAnimal();
owl.printFly();