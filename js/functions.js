var playerPositions = [];
var computerPositions = [];

var steps = 0;
var i = 0;
var j = 0;
var playerWin;
var computerWin;

const locations = [
    [1, 'ena-ena'],
    [2, 'ena-dva'],
    [3, 'ena-tri'],
    [4, 'dva-ena'],
    [5, 'dva-dva'],
    [6, 'dva-tri'],
    [7, 'tri-ena'],
    [8, 'tri-dva'],
    [9, 'tri-tri'],
];


const winningComibations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]



function checkWin() {

    var points = 0;
    var combination;

    //get right positions
    if (steps % 2 == 1) {
        var asking = playerPositions;
    } else {
        var asking = computerPositions;
    }

    //loop trough winning cominations
    for (i = 0; i < winningComibations.length; i++) {


        combination = winningComibations[i];

        //loop trough combination one by one and checking if someone has it 
        for (j = 0; j < combination.length; j++) {

            if (asking.includes(combination[j])) {
                points++;
            }

            if (points == 3) {
                return true;
            }
        }
        points = 0;
    }
    return false;
}

function select(location) {


    if (checkFreePosition(location) == true) {
        alert("Polje je ze izbrano");
    } else {
        playerPositions.push(location);
        updateDesign(location, "player");

        if (checkWin()) {
            alert('YOU WON');
        }



        if (steps < 8) {
            computerPlay();
        }

    }



}



function computerPlay() {

    var location = Math.floor(Math.random() * 9) + 1;

    while (checkFreePosition(location)) {
        location = Math.floor(Math.random() * 9) + 1;
    }

    computerPositions.push(location);
    updateDesign(location, "computer");

    if (checkWin()) {
        alert('Computer won');
    }

}



//funckija preverja ce je lokacija ze izbrana
function checkFreePosition(location) {

    if (playerPositions.includes(location) == true || computerPositions.includes(location)) {
        return true;
    } else {
        return false;
    }
}

function updateDesign(location, move) {

    var cellID;
    steps++;

    for (i = 0; i <= 8; i++) {
        if (locations[i][0] == location) {
            cellID = locations[i][1];
        }
    }

    if (move == "player") {
        document.getElementById(cellID).style.backgroundColor = "lightblue";
        document.getElementById(cellID).innerHTML = "X";
    } else {
        document.getElementById(cellID).style.backgroundColor = "lightcoral";
        document.getElementById(cellID).innerHTML = "0";
    }

}
