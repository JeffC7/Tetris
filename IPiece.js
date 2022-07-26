class IPiece {
    constructor() {
        this.firstPart = "a3";
        this.secondPart = "a4";
        this.thirdPart = "a5";
        this.fourthPart = "a6";
        this.horizontal = true;
        this.count = 0;
    }
    
    drawIPiece() {
        document.getElementById(piece.firstPart).style.backgroundColor = "cyan";
        document.getElementById(piece.secondPart).style.backgroundColor = "cyan";
        document.getElementById(piece.thirdPart).style.backgroundColor = "cyan";
        document.getElementById(piece.fourthPart).style.backgroundColor = "cyan";
    }

    undrawIPiece() {
        document.getElementById(piece.firstPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.secondPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.thirdPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.fourthPart).style.backgroundColor = "rgb(35, 35, 35)";
    }

    autoMoveDownI() {
        this.undrawIPiece();
        this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
        this.secondPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) + 1) + this.secondPart[1];
        this.thirdPart = String.fromCharCode(this.thirdPart[0].charCodeAt(0) + 1) + this.thirdPart[1];
        this.fourthPart = String.fromCharCode(this.fourthPart[0].charCodeAt(0) + 1) + this.fourthPart[1];
        this.drawIPiece();
    }

    
    moveLeft() {
        this.undrawIPiece();
        this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
        this.secondPart = this.secondPart[0] + String.fromCharCode(this.secondPart[1].charCodeAt(0) - 1);
        this.thirdPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) - 1);
        this.fourthPart = this.fourthPart[0] + String.fromCharCode(this.fourthPart[1].charCodeAt(0) - 1);
        this.drawIPiece();
    }

    moveRight() {
        this.undrawIPiece();
        this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
        this.secondPart = this.secondPart[0] + String.fromCharCode(this.secondPart[1].charCodeAt(0) + 1);
        this.thirdPart = this.thirdPart[0] + String.fromCharCode(this.thirdPart[1].charCodeAt(0) + 1);
        this.fourthPart = this.fourthPart[0] + String.fromCharCode(this.fourthPart[1].charCodeAt(0) + 1);
        this.drawIPiece();
    }

    moveDown() {
        this.autoMoveDownI();
    }

    rotatePiece() {
        if ((this.count % 2 == 0) && this.horizontal) {
            this.undrawIPiece();
            this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
            this.secondPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
            this.thirdPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + this.firstPart[1];
            this.fourthPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 3) + this.firstPart[1];
            this.drawIPiece();
            this.count++;
            this.horizontal = false;
        } else if ((this.count % 2 == 1 && this.horizontal)) {
            this.undrawIPiece();
            this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.secondPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
            this.thirdPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 2) + this.firstPart[1];
            this.fourthPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 3) + this.firstPart[1];
            this.drawIPiece();
            this.count++;
            this.horizontal = false;
        } else if ((this.count % 2 == 0) && this.horizontal == false) {
            this.undrawIPiece();
            this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 1);
            this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
            this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
            this.drawIPiece();
            this.horizontal = true;
        } else if ((this.count % 2 == 1) && this.horizontal == false) {
            this.undrawIPiece();
            this.firstPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) - 2);
            this.secondPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 1);
            this.thirdPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 2);
            this.fourthPart = this.firstPart[0] + String.fromCharCode(this.firstPart[1].charCodeAt(0) + 3);
            this.horizontal = true;
            this.drawIPiece
        }
 
    }


}

const piece = new IPiece();
piece.drawIPiece();
let i = 1;
while (i <= 19) {
    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37: // Left Arrow Key
                piece.moveLeft();
                break;
            case 39: // Right Arrow Key
                piece.moveRight();
                break;
            // case 38: Up Key
            case 38:
                piece.rotatePiece();
            case 40:
                piece.moveDown();
                break;
            // case 40: Down Key
        }
    };
    setTimeout(() => {
        piece.autoMoveDownI();
    }, 1000 * i);
    i++;
}