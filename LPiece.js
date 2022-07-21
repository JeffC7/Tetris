class LPiece {
    constructor() {
        this.firstPart = "a6";
        this.secondPart = "b6";
        this.thirdPart = "b5";
        this.fourthPart = "b4";
    }

    autoMoveDownL() {
        document.getElementById(piece.firstPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.secondPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.thirdPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.fourthPart).style.backgroundColor = "rgb(35, 35, 35)";
        this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
        this.secondPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) + 1) + this.secondPart[1];
        this.thirdPart = String.fromCharCode(this.thirdPart[0].charCodeAt(0) + 1) + this.thirdPart[1];
        this.fourthPart = String.fromCharCode(this.fourthPart[0].charCodeAt(0) + 1) + this.fourthPart[1];
        document.getElementById(piece.firstPart).style.backgroundColor = "orange";
        document.getElementById(piece.secondPart).style.backgroundColor = "orange";
        document.getElementById(piece.thirdPart).style.backgroundColor = "orange";
        document.getElementById(piece.fourthPart).style.backgroundColor = "orange";
    }
}
  
const piece = new LPiece();
document.getElementById(piece.firstPart).style.backgroundColor = "orange";
document.getElementById(piece.secondPart).style.backgroundColor = "orange";
document.getElementById(piece.thirdPart).style.backgroundColor = "orange";
document.getElementById(piece.fourthPart).style.backgroundColor = "orange";

let i = 1;
while (i <= 18) {
setTimeout(() => {
    piece.autoMoveDownL();
}, 1000 * i);
    i++;
}


