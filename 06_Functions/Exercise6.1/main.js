function addTwoNumbers() {
    let a = document.getElementById("aValue").value;
    let b = document.getElementById("bValue").value;
    let result = parseInt(a) + parseInt(b);
    if (result >= 0) {
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "You might miss one of the numbers or both of them are negative";
    }
}

// console.log(addTwoNumbers(1, 2));