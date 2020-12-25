"use strict";

//element selected
const closeBtn = document.querySelector('.close-btn');
const container = document.querySelector('.container');
const footer = document.querySelector('.footer');
const rule = document.querySelector('.rule');
const ruleBtn = document.querySelector('.rule-btn');
const score = document.querySelector('.score__text');
const button = document.querySelectorAll('.btn');
const rockBtn = document.getElementsByClassName('rock-btn');
const scissorBtn = document.getElementsByClassName('scissor-btn');
const paperBtn = document.getElementsByClassName('paper-btn');
const playground = document.querySelector('.playground');
const chosenPlayground = document.querySelector('.place-holder-toggler');
// const selectedPaperBtn = document.querySelector('.selected-paper-btn');
// const selectedScissorBtn = document.querySelector('.selected-scissor-btn');
// const selectedRockBtn = document.querySelector('.selected-rock-btn');
const winLose = document.querySelector('.win-lose-highlight');
const winLoseText = document.querySelector('.win-lose-text');
const playAgainBtn = document.querySelector('.playAgain-btn');

const options = ['rock', 'paper', 'scissor'];
let randomOption = Math.trunc(Math.random() * 3);
let house;
let player;
let totalScore = 0;


//close rules on clicking close button
closeBtn.addEventListener('click', function () {
    rule.classList.add('hidden');
    container.classList.toggle('bg-blur');
    footer.classList.toggle('bg-blur');
});

//open rule on clicking rule button
ruleBtn.addEventListener('click', function () {
    rule.classList.toggle('hidden');
    container.classList.toggle('bg-blur');
    footer.classList.toggle('bg-blur');
});

//click on body, closes rule model
container.addEventListener('click', function () {
    rule.classList.add('hidden');
    container.classList.remove('bg-blur');
    footer.classList.remove('bg-blur');
});

function winner() {
    winLoseText.textContent = "You win";
    totalScore += 1;
    score.textContent = totalScore;

}
function loser() {
    winLoseText.textContent = "You Lose";
    if (totalScore > 0) {
        totalScore -= 1;
        score.textContent = totalScore;
    }

}
function draw() {
    winLoseText.textContent = "It's a Draw";
}

//click on rock or scissor or paper button
for (let i = 0; i < 3; i++) {

    button[i].addEventListener('click', function () {

        //Hidding all 3 button setup placeholder playground
        playground.classList.add('hidden');

        //Showing 2 button placeholder chosen playground
        chosenPlayground.classList.remove('hidden');
        ['rock', 'paper', 'scissor']
        //conditions for button to show on YOU PICKED button
        if (button[i].classList.contains('paper-btn')) {
            player = options[1];
            document.querySelector(`.player-${player}-btn`).classList.remove('hidden');
            document.querySelector(`.player-${player}-btn`).classList.add('option-chosen-by-player-gridPosition');

        } else if (button[i].classList.contains('rock-btn')) {
            player = options[0];
            document.querySelector(`.player-${player}-btn`).classList.remove('hidden');
            document.querySelector(`.player-${player}-btn`).classList.add('option-chosen-by-player-gridPosition');

        } else if (button[i].classList.contains('scissor-btn')) {
            player = options[2];
            document.querySelector(`.player-${player}-btn`).classList.remove('hidden');
            document.querySelector(`.player-${player}-btn`).classList.add('option-chosen-by-player-gridPosition');

        }

        //HOUSE PICKED
        house = options[randomOption];
        document.querySelector(`.house-${house}-btn`).classList.remove('hidden');
        document.querySelector(`.house-${house}-btn`).classList.add('option-chosen-by-house-gridPosition');

        //condition for winner
        winLose.classList.remove('hidden');
        if (player === 'rock') {
            if (house === 'scissor') {
                winner();
            } else if (house === 'paper') {
                loser();
            } else {
                draw();
            }
        } else if (player === 'scissor') {
            if (house === 'paper') {
                winner();
            } else if (house === 'rock') {
                loser();
            } else {
                draw();
            }
        } else if (player === 'paper') {
            if (house === 'scissor') {
                loser();
            } else if (house === 'rock') {
                winner();
            } else {
                draw();
            }
        };

    });

};

playAgainBtn.addEventListener('click', function () {

    // reset to 3 button
    playground.classList.remove('hidden');

    //hidding 2 button placeholder
    chosenPlayground.classList.add('hidden');

    //reset of house
    document.querySelector(`.house-${house}-btn`).classList.add('hidden');
    document.querySelector(`.house-${house}-btn`).classList.remove('option-chosen-by-house-gridPosition');

    //reset of player
    document.querySelector(`.player-${player}-btn`).classList.add('hidden');
    document.querySelector(`.player-${player}-btn`).classList.remove('option-chosen-by-player-gridPosition');

    //hiding win/lose text & play again button
    winLose.classList.add('hidden');

    //reset of random number
    randomOption = Math.trunc(Math.random() * 3);
});





