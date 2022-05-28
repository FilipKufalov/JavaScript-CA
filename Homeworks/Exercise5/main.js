w3resourceText = document.getElementById('w3resource');
let w3Array = ["w", "3", "r", "e", "s", "o", "u", "r", "c", "e"];
let w3Text = "";

for (let i = 0; i < w3Array.length; i++) {
    w3Text = w3Text + w3Array[i];
}

while (w3Array.length > 0 & w3Array.length < 11) {
    let firstitem = w3Array.shift();
    w3Array.push(firstitem);
    console.log(w3Array);
    // sleep(2000);
    w3resourceText.innerText = w3Text;
}

// console.log(w3Text);