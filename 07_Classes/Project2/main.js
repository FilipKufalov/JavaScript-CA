class MenuItem {
    #burgerPrice = 180;
    #picaPrice = 230;
    constructor(amountOfBurgers, amountOfPicas) {
        this.amountOfBurgers = amountOfBurgers;
        this.amountOfPicas = amountOfPicas;
    }

    calculatePrice() {
        return this.#burgerPrice * this.amountOfBurgers + this.#picaPrice * this.amountOfPicas;
    }

    get getPrice() {
        return this.calculatePrice();
    }

}

let order1 = new MenuItem(2, 1);
let order2 = new MenuItem(1, 4);

console.log(order1.getPrice);
console.log(order2.getPrice);
