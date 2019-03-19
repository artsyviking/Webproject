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

function numberClick() {
    for (let i = 1; i <= 100; i++) {
        addEventListener(i);
    }
}

function addEventListener(num) {
    let numberElement = document.getElementById(num.toString());
    numberElement.addEventListener('click', (event) => {
        numTriesRemaining--;
        compare(num);
        let livesId = document.getElementById('lives');
        if (numTriesRemaining <= 0 && num !== play) {
            numberGen();
            numTriesRemaining = 10;
            this.outputResults('You ran out of tries! You lose!');
        }
        livesId.innerText = numTriesRemaining;
    });
}

var numTriesRemaining = 10;

function numberGen() {
    play = Math.ceil(Math.random() * 100);
}

var play;

// function compareWithDelay(playerChoice) {
//     setTimeout(() => {
//         compare(playerChoice);
//     }, 1000);
// }

function compare(playerChoice) {
    let npcChoice = play;
    if (playerChoice < npcChoice) {
        this.outputResults('Wrong! Too low!');
    } else if (playerChoice === npcChoice) {
        this.outputResults('You guessed the number, you win!');
        numberGen();
        numTriesRemaining = 10;
    } else if (playerChoice > npcChoice) {
        this.outputResults('Wrong! Too high!');
    } else {
        this.outputResults('You broke the game!?');
    }
}

function outputResults(result) {
    let outcomeElement = document.getElementById('outcomeText');
    //make an id of outcomeText in HTML!
    outcomeElement.innerText = result;
}

window.onload = () => {
    hundred();
    numberClick();
    numberGen();
}