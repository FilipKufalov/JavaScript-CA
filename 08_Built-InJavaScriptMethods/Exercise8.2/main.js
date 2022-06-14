let arry = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];
let filterNames = arry.filter((param, param2, param3) => {
    return param3.indexOf(param) === param2;
}
);
console.log(filterNames);