import { drawPiece } from "./game.js";
import { undrawPiece } from "./game.js";

export class TPiece {
    constructor() {
        this.name = "T";
        this.firstPart = "a4";
        this.secondPart = "b3";
        this.thirdPart = "b4";
        this.fourthPart = "b5";
        this.rotate1 = true;
        this.rotate2 = false;
        this.rotate3 = false;
        this.rotate4 = false;
    }

    rotateTPiece() {
        if (this.rotate1) {
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.secondPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) - 1) + String.fromCharCode(this.secondPart[1].charCodeAt(0) + 1);
            this.fourthPart = String.fromCharCode(this.fourthPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.fourthPart[1].charCodeAt(0) - 1);
            drawPiece();
            this.rotate1 = false;
            this.rotate2 = true;
        } else if (this.rotate2) {
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
            this.secondPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.secondPart[1].charCodeAt(0) + 1);
            this.fourthPart = String.fromCharCode(this.fourthPart[0].charCodeAt(0) - 1) + String.fromCharCode(this.fourthPart[1].charCodeAt(0) - 1);
            drawPiece();
            this.rotate2 = false;
            this.rotate3 = true;
        } else if (this.rotate3) {
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) - 1) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
            this.secondPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.secondPart[1].charCodeAt(0) - 1);
            this.fourthPart = String.fromCharCode(this.fourthPart[0].charCodeAt(0) - 1) + String.fromCharCode(this.fourthPart[1].charCodeAt(0) + 1);
            drawPiece();
            this.rotate3 = false;
            this.rotate4 = true;
        } else if (this.rotate4) {
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) - 1) + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.secondPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) - 1) + String.fromCharCode(this.secondPart[1].charCodeAt(0) - 1);
            this.fourthPart = String.fromCharCode(this.fourthPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.fourthPart[1].charCodeAt(0) + 1);
            drawPiece();
            this.rotate4 = false;
            this.rotate1 = true;
        }
    }
}

