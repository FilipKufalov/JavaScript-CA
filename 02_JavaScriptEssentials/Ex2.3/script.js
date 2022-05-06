// let a = 36;
// let b = 15;
// let c = Math.sqrt(a * a + b * b);

// document.getElementById("p1_element").innerHTML = `a = ${a}`;
// document.getElementById("p2_element").innerHTML = `b = ${b}`;
// document.getElementById("p3_element").innerHTML = `result = ${c}`;

function Pythagorean()
{
    let a = parseInt(document.getElementById("a1").value);
    let b = parseInt(document.getElementById("b1").value);
    result = Math.sqrt(a * a + b * b);
    document.getElementById("result").innerHTML = result;
}
