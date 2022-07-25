class IPiece {
    constructor() {
        this.firstPart = "a4";
        this.secondPart = "b4";
        this.thirdPart = "c4";
        this.fourthPart = "d4";
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
        
    }


}

const piece = new IPiece();
piece.drawIPiece();
let i = 1;
while (i <= 16) {
    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37: // Left Arrow Key
                piece.moveLeft();
                break;
            case 39: // Right Arrow Key
                piece.moveRight();
                break;
            // case 38: Up Key
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