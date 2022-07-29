class SPiece {
    constructor() {
        this.name = "S";
        this.firstPart = "a5";
        this.secondPart = "a4";
        this.thirdPart = "b4";
        this.fourthPart = "b3";
    }

    autoMoveDownS() {
        document.getElementById(piece.firstPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.secondPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.thirdPart).style.backgroundColor = "rgb(35, 35, 35)";
        document.getElementById(piece.fourthPart).style.backgroundColor = "rgb(35, 35, 35)";
        this.firstPart = String.fromCharCode(this.firstPart[0].charCodeAt(0) + 1) + this.firstPart[1];
        this.secondPart = String.fromCharCode(this.secondPart[0].charCodeAt(0) + 1) + this.secondPart[1];
        this.thirdPart = String.fromCharCode(this.thirdPart[0].charCodeAt(0) + 1) + this.thirdPart[1];
        this.fourthPart = String.fromCharCode(this.fourthPart[0].charCodeAt(0) + 1) + this.fourthPart[1];
        document.getElementById(piece.firstPart).style.backgroundColor = "lawngreen";
        document.getElementById(piece.secondPart).style.backgroundColor = "lawngreen";
        document.getElementById(piece.thirdPart).style.backgroundColor = "lawngreen";
        document.getElementById(piece.fourthPart).style.backgroundColor = "lawngreen";
    }
}

const piece = new SPiece();
document.getElementById(piece.firstPart).style.backgroundColor = "lawngreen";
document.getElementById(piece.secondPart).style.backgroundColor = "lawngreen";
document.getElementById(piece.thirdPart).style.backgroundColor = "lawngreen";
document.getElementById(piece.fourthPart).style.backgroundColor = "lawngreen"
let i = 1;
while (i <= 18) {
    setTimeout(() => {
        piece.autoMoveDownS();
    }, 1000 * i);
    i++;
}