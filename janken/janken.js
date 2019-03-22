function npc() {
    let play = Math.ceil(Math.random() * 3);
    return play;
}

/*
Paper = 1
Rock = 2
Scissors = 3
*/
function imageClick() {
    addEventListener('rock', 2);
    addEventListener('paper', 1);
    addEventListener('scissors', 3);
}

function addEventListener(id, num) {
    let jankenElement = document.getElementById(id);
    jankenElement.addEventListener('click', (event) => {
        this.outputResults('...');
        document.getElementById('loadingGif').setAttribute('src', 'images/loading_gif.gif');
        compareWithDelay(num);
    });
}

function compareWithDelay(playerChoice) {
    setTimeout(() => {
        compare(playerChoice);
    }, Math.ceil(Math.random() * 1500));
}

function compare(playerChoice) {
    let npcChoice = this.npc();
    
    if (playerChoice === npcChoice) {
        this.outputResults('This round ends in a draw!');
        //This is a draw!
    }
    else if (playerChoice === 3 && npcChoice === 1) {
        this.outputResults('You won this round!');
        //Player chose scissors, npc chose paper. Player wins.
    }
    else if (playerChoice === 3 && npcChoice === 2) {
        this.outputResults('You lost this round...')
        //Player chose scissors, npc chose rock. Npc wins.
    }
    else if (playerChoice === 2 && npcChoice === 3) {
        this.outputResults('You won this round!');
        //Player chose rock, npc chose scissors. Player wins.
    }
    else if (playerChoice === 2 && npcChoice === 1) {
        this.outputResults('You lost this round...');
        //Player chose rock, npc chose paper. Npc wins.
    }
    else if (playerChoice === 1 && npcChoice === 2) {
        this.outputResults('You won this round!');
        //Player chose paper, npc chose rock. Player wins.
    }
    else if (playerChoice === 1 && npcChoice === 3) {
        this.outputResults('You lost this round...');
        //Player chose paper, npc chose scissors. Npc wins.
    }
    else {
        this.outputResults('You somehow broke the game. gg');
        //You broke the game. gg.
    }
}

function outputResults(result) {
    document.getElementById('loadingGif').setAttribute('src', '');
    let outcomeElement = document.getElementById('outcomeText');
    outcomeElement.innerText = result;
}

imageClick();