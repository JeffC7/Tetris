import {IPiece} from "./IPiece.js";
import {JPiece} from "./JPiece.js";
import {LPiece} from "./LPiece.js";
import {OPiece} from "./OPiece.js";
import {SPiece} from "./SPiece.js";
import {ZPiece} from "./ZPiece.js";
import {TPiece} from "./TPiece.js";

//function to draw piece depending on the name of the piece
export function drawPiece() {
    const colorMap = {
        "I": "cyan",
        "J": "blue",
        "L": "orange",
        "S": "lawngreen",
        "Z": "orangered",
        "T": "violet",
        "O": "gold"
    }
    document.getElementById(piece.firstPart).style.backgroundColor = colorMap[piece.name];
    document.getElementById(piece.secondPart).style.backgroundColor = colorMap[piece.name];
    document.getElementById(piece.thirdPart).style.backgroundColor = colorMap[piece.name];
    document.getElementById(piece.fourthPart).style.backgroundColor = colorMap[piece.name];
}

// function to undraw piece as the piece moves down o the board on is placed on the board
export function undrawPiece() {
    document.getElementById(piece.firstPart).style.backgroundColor = "rgb(35, 35, 35)";
    document.getElementById(piece.secondPart).style.backgroundColor = "rgb(35, 35, 35)";
    document.getElementById(piece.thirdPart).style.backgroundColor = "rgb(35, 35, 35)";
    document.getElementById(piece.fourthPart).style.backgroundColor = "rgb(35, 35, 35)";
}

// document.addEventListener('DOMContentLoaded', () => {
// function that moves the piece down
function autoMoveDown() {
    if (String.fromCharCode(piece.firstPart[0].charCodeAt(0) + 1) == 'u' ||
        String.fromCharCode(piece.secondPart[0].charCodeAt(0) + 1) == 'u' ||
        String.fromCharCode(piece.thirdPart[0].charCodeAt(0) + 1) == 'u' ||
        String.fromCharCode(piece.fourthPart[0].charCodeAt(0) + 1) == 'u'||
        !canMoveDown()) {
        document.getElementById(piece.firstPart).setAttribute("taken", "true");
        document.getElementById(piece.secondPart).setAttribute("taken", "true");
        document.getElementById(piece.thirdPart).setAttribute("taken", "true");
        document.getElementById(piece.fourthPart).setAttribute("taken", "true");
        freeze();
        return;
    }
    undrawPiece();
    piece.firstPart = String.fromCharCode(piece.firstPart[0].charCodeAt(0) + 1) + piece.firstPart[1];
    piece.secondPart = String.fromCharCode(piece.secondPart[0].charCodeAt(0) + 1) + piece.secondPart[1];
    piece.thirdPart = String.fromCharCode(piece.thirdPart[0].charCodeAt(0) + 1) + piece.thirdPart[1];
    piece.fourthPart = String.fromCharCode(piece.fourthPart[0].charCodeAt(0) + 1) + piece.fourthPart[1];
    drawPiece();
} 

function canMoveLeft() {
    let first = `${piece.firstPart[0]}${String.fromCharCode(piece.firstPart[1].charCodeAt(0) - 1)}`;
    let second = `${piece.secondPart[0]}${String.fromCharCode(piece.secondPart[1].charCodeAt(0) - 1)}`;
    let third = `${piece.thirdPart[0]}${String.fromCharCode(piece.thirdPart[1].charCodeAt(0) - 1)}`;
    let fourth = `${piece.fourthPart[0]}${String.fromCharCode(piece.fourthPart[1].charCodeAt(0) - 1)}`;

    if (document.getElementById(first).getAttribute('taken') ||
        document.getElementById(second).getAttribute('taken') ||
        document.getElementById(third).getAttribute('taken') ||
        document.getElementById(fourth).getAttribute('taken')) {
        return false;
    }
    return true;
}

function canMoveRight() {
    let first = `${piece.firstPart[0]}${String.fromCharCode(piece.firstPart[1].charCodeAt(0) + 1)}`;
    let second = `${piece.secondPart[0]}${String.fromCharCode(piece.secondPart[1].charCodeAt(0) + 1)}`;
    let third = `${piece.thirdPart[0]}${String.fromCharCode(piece.thirdPart[1].charCodeAt(0) + 1)}`;
    let fourth = `${piece.fourthPart[0]}${String.fromCharCode(piece.fourthPart[1].charCodeAt(0) + 1)}`;

    if (document.getElementById(first).getAttribute('taken') ||
        document.getElementById(second).getAttribute('taken') ||
        document.getElementById(third).getAttribute('taken') ||
        document.getElementById(fourth).getAttribute('taken')) {
        return false;
    }
    return true;
}
function canMoveDown() {

    //find the highest alphabet for each number;
    //perform character comparison if column already exists
    //replace column with better character
    const columns = {};

    //piece.Xpart[1] = column value
    const firstRow = piece.firstPart[0];
    const firstCol = piece.firstPart[1];

    const secondRow = piece.secondPart[0];
    const secondCol = piece.secondPart[1];
    
    const thirdRow = piece.thirdPart[0];
    const thirdCol = piece.thirdPart[1];

    const fourthRow = piece.fourthPart[0];
    const fourthCol = piece.fourthPart[1];

    //existing column
    if(columns[firstCol] != undefined){//columns[firstCol]-> current best row   
        if(firstRow > columns[firstCol]) columns[firstCol] = firstRow;
    }
    //column not considered yet, set as best by default 
    if(columns[firstCol] == undefined) columns[firstCol]=firstRow;

    if (columns[secondCol] != undefined) {//columns[firstCol]-> current best row   
        if (secondRow > columns[secondCol]) columns[secondCol] = secondRow;
    }
    //column not considered yet, set as best by default 
    if (columns[secondCol] == undefined) columns[secondCol] = secondRow;

    if (columns[thirdCol] != undefined) {//columns[firstCol]-> current best row   
        if (thirdRow > columns[thirdCol]) columns[thirdCol] = thirdRow;
    }
    //column not considered yet, set as best by default 
    if (columns[thirdCol] == undefined) columns[thirdCol] = thirdRow;

    if (columns[fourthCol] != undefined) {//columns[firstCol]-> current best row   
        if (fourthRow > columns[fourthCol]) columns[fourthCol] = fourthRow;
    }
    //column not considered yet, set as best by default 
    if (columns[fourthCol] == undefined) columns[fourthCol] = fourthRow;

    
    const bottomPieces = Object.keys(columns).map((col)=>{
        return `${columns[col]}${col}`;
    })

    for(let i=0;i<bottomPieces.length;i++){
        const nextPiece = `${String.fromCharCode(bottomPieces[i][0].charCodeAt(0) + 1)}${String. fromCharCode(bottomPieces[i][1].charCodeAt(0) )}`

        if(document.getElementById(nextPiece).getAttribute('taken')){
            return false;
        }
    }

    return true;
    
}


// function to move the piece left
function moveLeft() {
    if (piece.firstPart[1] == "0" || piece.secondPart[1] == "0" || piece.thirdPart[1] == "0" || piece.fourthPart[1] == "0") {
        return;
    } else if (!canMoveLeft()) {
        return;
    }
    undrawPiece();
    piece.firstPart = piece.firstPart[0] + String.fromCharCode(piece.firstPart[1].charCodeAt(0) - 1);
    piece.secondPart = piece.secondPart[0] + String.fromCharCode(piece.secondPart[1].charCodeAt(0) - 1);
    piece.thirdPart = piece.thirdPart[0] + String.fromCharCode(piece.thirdPart[1].charCodeAt(0) - 1);
    piece.fourthPart = piece.fourthPart[0] + String.fromCharCode(piece.fourthPart[1].charCodeAt(0) - 1);
    drawPiece();
}

// function to move the piece right
function moveRight() {
    if (piece.firstPart[1] == "9" || piece.secondPart[1] == "9" || piece.thirdPart[1] == "9" || piece.fourthPart[1] == "9") {
        return;
    } else if (!canMoveRight()) {
        return;
    }
    undrawPiece();
    piece.firstPart = piece.firstPart[0] + String.fromCharCode(piece.firstPart[1].charCodeAt(0) + 1);
    piece.secondPart = piece.secondPart[0] + String.fromCharCode(piece.secondPart[1].charCodeAt(0) + 1);
    piece.thirdPart = piece.thirdPart[0] + String.fromCharCode(piece.thirdPart[1].charCodeAt(0) + 1);
    piece.fourthPart = piece.fourthPart[0] + String.fromCharCode(piece.fourthPart[1].charCodeAt(0) + 1);
    drawPiece();
}

// function to set the piece in place on the board bring another piece
function freeze() {
    if (document.getElementById(piece.firstPart).getAttribute('taken') == "true" || document.getElementById(piece.secondPart).getAttribute('taken') == "true"
        || document.getElementById(piece.thirdPart).getAttribute('taken') == "true" || document.getElementById(piece.fourthPart).getAttribute('taken') == "true") {
        random = Math.floor(Math.random() * listOfPieces.length);
        getNewPiece(random);
        drawPiece();
    } 
}

// function that creates the new piece object depending on the random number that is generated
function getNewPiece(random) {
    if (random == 0) {
        piece = new IPiece;
    } else if (random == 1) {
        piece = new JPiece;
    } else if (random == 2) {
        piece = new SPiece;
    } else if (random == 3) {
        piece = new OPiece;
    } else if (random == 4) {
        piece = new LPiece;
    } else if (random == 5) {
        piece = new ZPiece;
    } else if (random == 6) {
        piece = new TPiece;
    }
}

const listOfPieces = ["IPiece", "JPiece", "SPiece", "OPiece", "LPiece", "ZPiece", "TPiece"];
let random = Math.floor(Math.random() * listOfPieces.length);

let piece;
getNewPiece(random);
let i = 1;//?
drawPiece();
// setInterval(autoMoveDown, 200);
document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37: // Left Arrow Key
            moveLeft();
            break;
        case 39: // Right Arrow Key
            moveRight();
            break;
        case 38: // Up Arrow Key
            if (random == 0) {
                piece.rotateIPiece();
                break;
            } else if (random == 1) {
                piece.rotateJPiece();
                break;
            } else if (random == 2) {
                piece.rotateSPiece();
                break;
            } else if (random == 4) {
                piece.rotateLPiece();
                break;
            } else if (random == 5) {
                piece.rotateZPiece();
                break;
            } else if (random == 6) {
                piece.rotateTPiece();
                break;
            }
        case 40: // Down Arrow Key
            autoMoveDown();
            break;
        }
    // for(let row = 0;row<20;row++){
    //     for(let col =0;col<9;col++){
    //         const cell = `${String.fromCharCode('a'.charCodeAt(0) +row)}${col}`;
    //         const taken = document.getElementById(cell).getAttribute('taken');
    //         if(!taken){
    //             document.getElementById(cell).style.backgroundColor = "#000";
    //         }
    //         else{
    //             document.getElementById(cell).style.backgroundColor = "#fff";
    //         }
    //     }
    // }
};
// })