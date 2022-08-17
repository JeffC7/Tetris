import { drawPiece } from "./game.js";
import { undrawPiece } from "./game.js";

export class ZPiece {
    constructor() {
        this.name = "Z";
        this.firstPart = "a3";
        this.secondPart = "a4";
        this.thirdPart = "b4";
        this.fourthPart = "b5";
        this.horizontal = true;
        this.count = 0;
    }
    
    rotateZPiece() {
        if ((this.count % 2 == 0) && this.horizontal) {
            undrawPiece();
            this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
            this.secondPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
            this.thirdPart = this.secondPart[0] + String.fromCharCode(this.secondPart[1].charCodeAt(0) - 1);
            this.fourthPart = String.fromCharCode(this.thirdPart[0].charCodeAt(0) + 1) + this.thirdPart[1];
            drawPiece();
            this.count++;
            this.horizontal = false;
        } else if ((this.count % 2 == 1 && this.horizontal)) {
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) - 1) + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.secondPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
            this.thirdPart = this.secondPart[0] + String.fromCharCode(this.secondPart[1].charCodeAt(0) - 1);
            this.fourthPart = String.fromCharCode(this.thirdPart[0].charCodeAt(0) + 1) + this.thirdPart[1];
            drawPiece();
            this.count++;
            this.horizontal = false;
        } else if ((this.count % 2 == 0) && this.horizontal == false) {
            if (this.thirdPart[1] == "0") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.secondPart[1];
                this.fourthPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) + 1);
                drawPiece();
                this.horizontal = true;
                return;
            } else if (this.firstPart[1] == "9") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 2);
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.secondPart[1];
                this.fourthPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) + 1);
                drawPiece();
                this.horizontal = true;
                return;
            }
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
            this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.thirdPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.secondPart[1];
            this.fourthPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) + 1);
            drawPiece();
            this.horizontal = true;
        } else if ((this.count % 2 == 1) && this.horizontal == false) {
            if (this.thirdPart[1] == "0") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.secondPart[1];
                this.fourthPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) + 1);
                drawPiece();
                this.horizontal = true;
                return;
            } else if (this.firstPart[1] == "9") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 2);
                this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.thirdPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.secondPart[1];
                this.fourthPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) + 1);
                drawPiece();
                this.horizontal = true;
                return;
            }
            undrawPiece();
            this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 2);
            this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.thirdPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) + 1) + this.secondPart[1];
            this.fourthPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) + 1);
            this.horizontal = true;
            drawPiece();
        }
    }
    
}