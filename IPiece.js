class IPiece {
    constructor() {
        this.firstPart = "a5";
        this.secondPart = "b5";
        this.thirdPart = "c5";
        this.fourthPart = "d5";
    }

    autoMoveDownI() {
        document.getElementById(piece.firstPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.secondPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.thirdPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.fourthPart).style.backgroundColor = "rgb(35, 35, 35)";
        this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
        this.secondPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) + 1) + this.secondPart[1];
        this.thirdPart = String.fromCharCode(this.thirdPart[0].charCodeAt(0) + 1) + this.thirdPart[1];
        this.fourthPart = String.fromCharCode(this.fourthPart[0].charCodeAt(0) + 1) + this.fourthPart[1];
        document.getElementById(piece.firstPart).style.backgroundColor = "cyan";
        document.getElementById(piece.secondPart).style.backgroundColor = "cyan";
        document.getElementById(piece.thirdPart).style.backgroundColor = "cyan";
        document.getElementById(piece.fourthPart).style.backgroundColor = "cyan";
    }
}

const piece = new IPiece();
document.getElementById(piece.firstPart).style.backgroundColor = "cyan";
document.getElementById(piece.secondPart).style.backgroundColor = "cyan";
document.getElementById(piece.thirdPart).style.backgroundColor = "cyan";
document.getElementById(piece.fourthPart).style.backgroundColor = "cyan"
let i = 1;
while (i <= 16) {
    setTimeout(() => {
        piece.autoMoveDownI();
    }, 1000 * i);
    i++;
}