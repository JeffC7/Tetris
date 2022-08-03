import {IPiece} from "./IPiece.js";
import {JPiece} from "./JPiece.js";
import {LPiece} from "./LPiece.js";
import {OPiece} from "./OPiece.js";
import {SPiece} from "./SPiece.js";
import {ZPiece} from "./ZPiece.js";
import {TPiece} from "./TPiece.js";

export function drawPiece() {
    if (piece.name == "I") {
        document.getElementById(piece.firstPart).style.backgroundColor = "cyan";
        document.getElementById(piece.secondPart).style.backgroundColor = "cyan";
        document.getElementById(piece.thirdPart).style.backgroundColor = "cyan";
        document.getElementById(piece.fourthPart).style.backgroundColor = "cyan";
    } else if (piece.name == "J") {
        document.getElementById(piece.firstPart).style.backgroundColor = "blue";
        document.getElementById(piece.secondPart).style.backgroundColor = "blue";
        document.getElementById(piece.thirdPart).style.backgroundColor = "blue";
        document.getElementById(piece.fourthPart).style.backgroundColor = "blue";
    } else if (piece.name == "L") {
        document.getElementById(piece.firstPart).style.backgroundColor = "orange";
        document.getElementById(piece.secondPart).style.backgroundColor = "orange";
        document.getElementById(piece.thirdPart).style.backgroundColor = "orange";
        document.getElementById(piece.fourthPart).style.backgroundColor = "orange";
    } else if (piece.name == "S") {
        document.getElementById(piece.firstPart).style.backgroundColor = "lawngreen";
        document.getElementById(piece.secondPart).style.backgroundColor = "lawngreen";
        document.getElementById(piece.thirdPart).style.backgroundColor = "lawngreen";
        document.getElementById(piece.fourthPart).style.backgroundColor = "lawngreen";
    } else if (piece.name == "Z") {
        document.getElementById(piece.firstPart).style.backgroundColor = "orangered";
        document.getElementById(piece.secondPart).style.backgroundColor = "orangered";
        document.getElementById(piece.thirdPart).style.backgroundColor = "orangered";
        document.getElementById(piece.fourthPart).style.backgroundColor = "orangered";
    } else if (piece.name == "T") {
        document.getElementById(piece.firstPart).style.backgroundColor = "violet";
        document.getElementById(piece.secondPart).style.backgroundColor = "violet";
        document.getElementById(piece.thirdPart).style.backgroundColor = "violet";
        document.getElementById(piece.fourthPart).style.backgroundColor = "violet";
    } else if (piece.name == "O") {
        document.getElementById(piece.firstPart).style.backgroundColor = "gold";
        document.getElementById(piece.secondPart).style.backgroundColor = "gold";
        document.getElementById(piece.thirdPart).style.backgroundColor = "gold";
        document.getElementById(piece.fourthPart).style.backgroundColor = "gold";
    }
}

export function undrawPiece() {
    document.getElementById(piece.firstPart).style.backgroundColor = "rgb(35, 35, 35)";
    document.getElementById(piece.secondPart).style.backgroundColor = "rgb(35, 35, 35)";
    document.getElementById(piece.thirdPart).style.backgroundColor = "rgb(35, 35, 35)";
    document.getElementById(piece.fourthPart).style.backgroundColor = "rgb(35, 35, 35)";
}

export function autoMoveDown() {
    undrawPiece();
    piece.firstPart = String.fromCharCode(piece.firstPart[0].charCodeAt(0) + 1) + piece.firstPart[1];
    piece.secondPart = String.fromCharCode(piece.secondPart[0].charCodeAt(0) + 1) + piece.secondPart[1];
    piece.thirdPart = String.fromCharCode(piece.thirdPart[0].charCodeAt(0) + 1) + piece.thirdPart[1];
    piece.fourthPart = String.fromCharCode(piece.fourthPart[0].charCodeAt(0) + 1) + piece.fourthPart[1];
    drawPiece();
} 

export function moveLeft() {
    undrawPiece();
    piece.firstPart = piece.firstPart[0] + String.fromCharCode(piece.firstPart[1].charCodeAt(0) - 1);
    piece.secondPart = piece.secondPart[0] + String.fromCharCode(piece.secondPart[1].charCodeAt(0) - 1);
    piece.thirdPart = piece.thirdPart[0] + String.fromCharCode(piece.thirdPart[1].charCodeAt(0) - 1);
    piece.fourthPart = piece.fourthPart[0] + String.fromCharCode(piece.fourthPart[1].charCodeAt(0) - 1);
    drawPiece();
}

export function moveRight() {
    undrawPiece();
    piece.firstPart = piece.firstPart[0] + String.fromCharCode(piece.firstPart[1].charCodeAt(0) + 1);
    piece.secondPart = piece.secondPart[0] + String.fromCharCode(piece.secondPart[1].charCodeAt(0) + 1);
    piece.thirdPart = piece.thirdPart[0] + String.fromCharCode(piece.thirdPart[1].charCodeAt(0) + 1);
    piece.fourthPart = piece.fourthPart[0] + String.fromCharCode(piece.fourthPart[1].charCodeAt(0) + 1);
    drawPiece();
}

// Create an array of strings
const listOfPieces = ["IPiece", "JPiece", "SPiece", "OPiece", "LPiece", "ZPiece", "TPiece"];

// to implement:
// randomly pull an element from this list of the array
// whatever is pulled out, create that piece and display on the board
// put pieces in next piece queue:
// hard-drop (space bar)
// hold piece (shift key)

const piece = new TPiece();
// drawPiece();
let i = 1;
while (i <= 18) {
    drawPiece();
    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37: // Left Arrow Key
                moveLeft();
                break;
            case 39: // Right Arrow Key
                moveRight();
                break;
            case 38: // Up Arrow Key
                piece.rotateTPiece();
                break;
            case 40: // Down Arrow Key
                autoMoveDown();
                break;
        }
    };
    setTimeout(() => {
        autoMoveDown();
    }, 1000 * i);
    i++;
}



