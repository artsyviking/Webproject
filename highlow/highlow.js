function hundred() {
    for (var i = 1; i <= 100; i++) {
        let node = document.createElement('li');
        node.id = i.toString();
        node.classList.add('hilonumber');
        node.innerText = i;
        let numbers = document.getElementById('numbers');
        numbers.appendChild(node);
    }
}


function numberGen() {
    let play = Math.ceil(Math.random() * 100);
    return play;
}

function numberClick() {
    addEventListener(document.id(this.i.toString), this.i);
}

function addEventListener(id, num) {
    let highLowElement = document.getElementById(id);
    highLowElement.addEventListener('click', (event) => {
        compareWithDelay(num);
    });
}

function compareWithDelay(playerChoice) {
    setTimeout(() => {
        compare(playerChoice);
    }, 1000);
}

function compare(playerChoice) {
    let npcChoice = this.numberGen();
    if (playerChoice < npcChoice) {

    }
}

function outputResults(result) {
    let outcomeElement = document.getElementById('outcomeText');
    outcomeElement.innerText = result;
}

window.onload = () => hundred();

numberClick();