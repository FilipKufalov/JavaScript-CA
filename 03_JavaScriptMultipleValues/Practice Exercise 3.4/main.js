let myCar = {
    make: "Fiat",
    model: "Punto",
    color: "Black",
    doors: 5,
    Automatic: false,
    accelerate(kmh){
        let acc = 10;
        return acc * kmh;
    },
    calcdistance(kmh,dist)
    {
        return dist / kmh;
    }
    // forSale: false
}

let propertyVariable = "color";
myCar[propertyVariable] = "white";

// let forSale = false

console.log(`${myCar.make} ${myCar.model} with ${myCar.color} color`);

propertyVariable = "forSale";
myCar[propertyVariable] = true;

console.log(myCar);

message = `${myCar.make} ${myCar.model}`
if(myCar[propertyVariable]) {
    console.log(`${message} is for sale`);
} else {
    console.log(`${message} is not for sale`);
}

console.log(`Total Time in Hours: ${myCar.calcdistance(100,650)}`);