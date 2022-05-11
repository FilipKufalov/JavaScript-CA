let shoppinglist = [];

shoppinglist.push("Milk","Bread","Apples")
console.log(shoppinglist);

let breadIndex = shoppinglist.indexOf("Bread");
shoppinglist.splice(breadIndex, 1, "Bananas", "Eggs");
console.log(shoppinglist);

let LogRemovedItem = shoppinglist.pop();
console.log(LogRemovedItem);

shoppinglist.sort();
console.log(shoppinglist);

let indexOfMilk = shoppinglist.indexOf("Milk");
console.log(indexOfMilk);

let bananaIndex = shoppinglist.indexOf("Bananas");
shoppinglist.splice(bananaIndex + 1, 0, "Carrots", "Lettuce");
console.log(shoppinglist);

let newshoppinglist = ["Juice","Pop"];
let newestshoppinglist = shoppinglist.concat(newshoppinglist,newshoppinglist);
console.log(newestshoppinglist);

let getLatestIndex = newestshoppinglist.lastIndexOf("Pop");
console.log(getLatestIndex);