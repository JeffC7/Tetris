import {drawPiece} from "./game.js";
import {undrawPiece} from "./game.js";

export class IPiece {
    constructor() {
        this.name = "I";
        this.firstPart = "a3";
        this.secondPart = "a4";
        this.thirdPart = "a5";
        this.fourthPart = "a6";
        this.horizontal = true;
        this.count = 0;
    }
    
    // drawIPiece() {
    //     document.getElementById(piece.firstPart).style.backgroundColor = "cyan";
    //     document.getElementById(piece.secondPart).style.backgroundColor = "cyan";
    //     document.getElementById(piece.thirdPart).style.backgroundColor = "cyan";
    //     document.getElementById(piece.fourthPart).style.backgroundColor = "cyan";
    // }

    // undrawIPiece() {
    //     document.getElementById(piece.firstPart).style.backgroundColor = "rgb(35, 35, 35)";
    //     document.getElementById(piece.secondPart).style.backgroundColor = "rgb(35, 35, 35)";
    //     document.getElementById(piece.thirdPart).style.backgroundColor = "rgb(35, 35, 35)";
    //     document.getElementById(piece.fourthPart).style.backgroundColor = "rgb(35, 35, 35)";
    // }

    // autoMoveDownI() {
    //     undrawPiece();
    //     this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
    //     this.secondPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) + 1) + this.secondPart[1];
    //     this.thirdPart = String.fromCharCode(this.thirdPart[0].charCodeAt(0) + 1) + this.thirdPart[1];
    //     this.fourthPart = String.fromCharCode(this.fourthPart[0].charCodeAt(0) + 1) + this.fourthPart[1];
    //     drawPiece();
    // }

    // moveDown() {
    //     autoMoveDown(piece);
    // }

    // moveLeft() {
    //     undrawPiece();
    //     this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
    //     this.secondPart = this.secondPart[0] + String.fromCharCode(this.secondPart[1].charCodeAt(0) - 1);
    //     this.thirdPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) - 1);
    //     this.fourthPart = this.fourthPart[0] + String.fromCharCode(this.fourthPart[1].charCodeAt(0) - 1);
    //     drawPiece();
    // }

    // moveRight() {
    //     undrawPiece();
    //     this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
    //     this.secondPart = this.secondPart[0] + String.fromCharCode(this.secondPart[1].charCodeAt(0) + 1);
    //     this.thirdPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) + 1);
    //     this.fourthPart = this.fourthPart[0] + String.fromCharCode(this.fourthPart[1].charCodeAt(0) + 1);
    //     drawPiece();
    // }

    rotateIPiece() {
        if ((this.count % 2 == 0) && this.horizontal) {
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) - 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
            this.secondPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
            this.thirdPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + this.firstPart[1];
            this.fourthPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 3) + this.firstPart[1];
            drawPiece();
            this.count++;
            this.horizontal = false;
        } else if ((this.count % 2 == 1 && this.horizontal)) {
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) - 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.secondPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
            this.thirdPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + this.firstPart[1];
            this.fourthPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 3) + this.firstPart[1];
            drawPiece();
            this.count++;
            this.horizontal = false;
        } else if ((this.count % 2 == 0) && this.horizontal == false) {
            undrawPiece();
            this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
            this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
            this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
            drawPiece();
            this.horizontal = true;
        } else if ((this.count % 2 == 1) && this.horizontal == false) {
            undrawPiece();
            this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 2);
            this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
            this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
            this.horizontal = true;
            drawPiece();
        }
 
    }


}
