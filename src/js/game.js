import { hands, counters, marks, imageSides} from "./objects.js";

function pcTurn() {

    let randomNumber = Math.floor(Math.random() * 3);
    let routeImageSelected = "";
    let possibleImages = ["images/scissors.png", "images/paper.png", "images/stone.png"];

    for (let i = 0; i < possibleImages.length; i++) {
        if (randomNumber == i) {
            routeImageSelected = possibleImages[i];
        }
    }
    imageSides.rightImage.src = routeImageSelected;
    evaluatingGame(counters.numberLeft, randomNumber);
}

function coloringMark(flag) {
    if (flag == 1) {
        counters.counterPlayer++;
        switch (counters.counterPlayer) {
            case 0:
                marks.lp_one.style.backgroundColor = "red";
                break;
            case 1:
                marks.lp_two.style.backgroundColor = "red";
                break;
            case 2:
                marks.lp_three.style.backgroundColor = "red";
                winner("Roberto33");
                break;
        }
    } else {

        counters.counterPC++;
        switch (counters.counterPC) {
            case 0:
                marks.rp_one.style.backgroundColor = "green";
                break;
            case 1:
                marks.rp_two.style.backgroundColor = "green";
                break;
            case 2:
                marks.rp_three.style.backgroundColor = "green";
                winner("PC");
                break;
        }
    }
}

function evaluatingGame(numberLeft, numberRight) {
    if (
        (numberLeft == 0 && numberRight == 1) || (numberLeft == 2 && numberRight == 0) || (numberLeft == 1 && numberRight == 2)) {
            console.log(numberLeft+" -- "+numberRight);
        coloringMark(1);
    }

    if (
        (numberLeft == 0 && numberRight == 2) || (numberLeft == 1 && numberRight == 0) || (numberLeft == 2 && numberRight == 1)) {
            console.log(numberLeft+" -- "+numberRight);
        coloringMark(0);
    }
}

function winner(winner) {
    alert(`The winner is ${winner}`);
}

export function main() {
    hands.scissorsHand.addEventListener('click', () => {
        imageSides.leftImage.src = "images/scissors.png";
        counters.numberLeft = 0;
        pcTurn();
    });

    hands.paperHand.addEventListener('click', () => {
        imageSides.leftImage.src = "images/paper.png";
        counters.numberLeft = 1;
        pcTurn();
    });

    hands.stoneHand.addEventListener('click', () => {
        imageSides.leftImage.src = "images/stone.png";
        counters.numberLeft = 2;
        pcTurn();
    });
}