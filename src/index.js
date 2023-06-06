import { DOM } from './DOM.js'
import { game } from './gameLogic.js'


const dom = DOM();
const newGame = game();

dom.renderStartPage();

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

function initializeButtons() {
    document.getElementById('start-button').addEventListener('click', function () {
        dom.resetPage();

        if (newGame.mode === "timer") {
            dom.renderTimerGamePage(1);
            newGame.startTimerGame(1);
        } else {
            dom.renderSurvivalGamePage();
            newGame.startSurvivalGame();
        }

        setInterval(function () {
            dom.renderLetters(newGame.letters)}, 1000 / (newGame.difficulty + 1));

        document.addEventListener('keydown', (event) => {
            const firstLetter = document.querySelector('.letter');
            if(!(firstLetter === null)) {
                if(firstLetter.innerText === event.key.toUpperCase()){
                    firstLetter.remove();
                    newGame.removeLetter(); 
                }
            }
        });
    });
    document.getElementById('difficulty-button').addEventListener('click', changeDifficulty);
    document.getElementById('mode-button').addEventListener('click', changeMode);
}

initializeButtons();
