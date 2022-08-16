import { drawPiece } from "./game.js";
import { undrawPiece } from "./game.js";

export class JPiece {
    constructor() {
        this.name = "J";
        this.firstPart = "a3";
        this.secondPart = "b3";
        this.thirdPart = "b4";
        this.fourthPart = "b5";
        this.rotate1 = true;
        this.rotate2 = false;
        this.rotate3 = false;
        this.rotate4 = false;
    }

    rotateJPiece() {
        if (this.rotate1) {
            undrawPiece();
            this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
            this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
            this.thirdPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) + 1) + this.secondPart[1];
            this.fourthPart = String.fromCharCode(this.thirdPart[0].charCodeAt(0) + 1) + this.secondPart[1];
            drawPiece();
            this.rotate1 = false;
            this.rotate2 = true;
        } else if (this.rotate2) {
            if (this.thirdPart[1] == "0") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
                this.secondPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) + 1) + String.fromCharCode(this.secondPart[1].charCodeAt(0) + 2);
                this.thirdPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) + 1);
                this.fourthPart = String.fromCharCode(this.fourthPart[0].charCodeAt(0) - 1) + this.fourthPart[1];
                drawPiece();
                this.rotate2 = false;
                this.rotate3 = true;
                return;
            }
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + this.firstPart[1];
            this.secondPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) - 1) + this.firstPart[1];
            this.thirdPart = this.secondPart[0] + String.fromCharCode(this.secondPart[1].charCodeAt(0) - 1);
            this.fourthPart = this.secondPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) - 1);
            drawPiece();
            this.rotate2 = false;
            this.rotate3 = true;
        } else if (this.rotate3) {
            undrawPiece();
            this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 2);
            this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.thirdPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) - 1) + this.secondPart[1];
            this.fourthPart = String.fromCharCode(this.thirdPart[0].charCodeAt(0) - 1) + this.thirdPart[1];
            drawPiece();
            this.rotate3 = false;
            this.rotate4 = true;
        } else if (this.rotate4) {
            if (this.thirdPart[1] == "9") {
                undrawPiece();
                this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) - 2) + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
                this.secondPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) - 1) + this.firstPart[1];
                this.thirdPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) - 1);
                this.fourthPart = String.fromCharCode(this.fourthPart[0].charCodeAt(0) + 1) + this.fourthPart[1];
                drawPiece();
                this.rotate4 = false;
                this.rotate1 = true;
                return;
            }
            undrawPiece();
            this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) - 2) + this.firstPart[1];
            this.secondPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
            this.thirdPart = this.secondPart[0] + String.fromCharCode(this.secondPart[1].charCodeAt(0) + 1);
            this.fourthPart = this.secondPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) + 1);
            drawPiece();
            this.rotate4 = false;
            this.rotate1 = true;
        }
    }
    
}
