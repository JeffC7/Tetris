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
            if (this.firstPart[1] == "0") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + this.firstPart[1];
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
                this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
                drawPiece();
                this.horizontal = true;
                return;
            } else if (this.firstPart[1] == "1") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
                this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
                drawPiece();
                this.horizontal = true;
                return;
            } else if (this.firstPart[1] == "9") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 3);
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
                this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
                drawPiece();
                this.horizontal = true;
                return;
            } else if (this.firstPart[1] == "8") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 2);
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
                this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
                drawPiece();
                this.horizontal = true;
                return;
            }
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
            this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
            this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
            drawPiece();
            this.horizontal = true;
        } else if ((this.count % 2 == 1) && this.horizontal == false) {
            if (this.firstPart[1] == "0" || this.firstPart[1] == "1") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + this.firstPart[1];
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
                this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
                drawPiece();
                this.horizontal = true;
                return;
            } else if (this.firstPart[1] == "1") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
                this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
                drawPiece();
                this.horizontal = true;
                return;
            } else if (this.firstPart[1] == "9") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 3);
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
                this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
                drawPiece();
                this.horizontal = true;
                return;
            } else if (this.firstPart[1] == "8") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 2);
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
                this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
                drawPiece();
                this.horizontal = true;
                return;
            }
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 2);
            this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
            this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
            this.horizontal = true;
            drawPiece();
        }
 
    }


}
