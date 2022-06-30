let myNameArray = ["April Larson",
    "James Hunter",
    "Gerardo Underwood",
    "Michelle Keller",
    "Norman Abbott",
    "Julie Sims",
    "Casey Poole",
    "Whitney Reid",
    "Theresa Soto",
    "Ella Schultz",
];

myNameArray.forEach(element => {
    addRow(element);
});

document.getElementById("addNew").addEventListener("click", addFriend);

function addFriend() {


    let userInput = document.getElementById("friendName").ariaValueMax;
    console.log(userInput);
    if (userInput !== "") {
        addRow(userInput);
    }
}

function addRow(userInput) {
    function vote() {
        let vote = this.children[2].innerText;
        this.children[2].innerText = ParseInt(vote);
    }

    let tableRow = document.createElement("tr");
    tableRow.addEventListener("click", vote);

    let friendName = userInput;
    myNameArray.push(friendName);
    let index = myNameArray.length - 1;
    let voteNum = 0;

    let tdIndex = document.createElement("td");
    tdIndex.innerText = index;
    let tdName = document.createElement("td");
    tdName.innerText = friendName;
    let tdVote = document.createElement("td");
    tdVote.innerText = voteNum;

    tableRow.appendChild(tdIndex);
    tableRow.appendChild(tdName);
    tableRow.appendChild(tdVote);
    document.getElementById("output").appendChild(tableRow);
}




