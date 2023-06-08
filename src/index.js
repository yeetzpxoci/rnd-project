import { DOM } from './DOM.js'
import { game } from './gameLogic.js'

const dom = DOM();
const newGame = new game();



function changeDifficulty() {
    //if difficulty is 0, it should be 1...
    if (newGame.difficulty == 0) {
        newGame.difficulty = 1;
        this.innerText = 'DIFFICULTY: MEDIUM'
    } else if (newGame.difficulty == 1) {
        newGame.difficulty = 2;
        this.innerText = 'DIFFICULTY: HARD'
    } else {
        newGame.difficulty = 0;
        this.innerText = 'DIFFICULTY: EASY'
    }
}

function changeMode() {
    if (newGame.mode == 'timer') {
        newGame.mode = 'SURVIVAL';
        this.innerText = 'MODE: SURVIVAL'
    } else {
        newGame.mode = 'timer';
        this.innerText = 'MODE: TIMER'
    }
}

function startGame() {
    dom.resetPage();

    if (newGame.mode === "timer") {
        dom.renderTimerGamePage(1, newGame.totalScore);
        newGame.startTimerGame(1);
    } else {
        dom.renderSurvivalGamePage(newGame.totalScore);
        newGame.startSurvivalGame();
    }

    const renderInterval = setInterval(function () {
        if (newGame.gameOver) {
            if(JSON.parse(localStorage.getItem('highscore')) < newGame.totalScore) {
                localStorage.setItem('highscore', JSON.stringify(newGame.totalScore));
            }
            clearInterval(renderInterval);
            newGame.resetGame();
            dom.endGame(initializeButtons); // Pass the game mode and the callback function
        } else {
            dom.renderLetters(newGame.letters);
            const score = document.getElementById('score');
            score.innerText = 'Score:' + newGame.totalScore; // Update the score value
        }
    }, 1000 / (newGame.difficulty + 1));

    const score = document.getElementById('score');

    document.addEventListener('keydown', (event) => {
        const firstLetter = document.querySelector('.letter');
        if (!(firstLetter === null)) {
            if (firstLetter.innerText === event.key.toUpperCase()) {
                firstLetter.remove();
                newGame.removeLetter();
                newGame.totalScore += (newGame.difficulty + 1);  
                score.innerText = 'Score:' + newGame.totalScore;
                console.log(score.innerText, newGame.totalScore);
            }
        }
    });
}

function initializeButtons() {
    document.getElementById('start-button').addEventListener('click', startGame);
    document.getElementById('difficulty-button').addEventListener('click', changeDifficulty);
    document.getElementById('mode-button').addEventListener('click', changeMode);
}

dom.renderStartPage();
initializeButtons();


