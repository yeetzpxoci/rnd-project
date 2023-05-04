import { DOM } from './DOM.js'
import { game } from './gameLogic.js'


const dom = DOM();
const newGame = game();

dom.renderStartPage();

function changeDifficulty(){
    //if difficulty is 0, it should be 1...
    if (newGame.difficulty == 0){
        newGame.difficulty = 1;
        this.innerText = 'DIFFICULTY: MEDIUM'
    } else if (newGame.difficulty == 1){
        newGame.difficulty = 2;
        this.innerText = 'DIFFICULTY: HARD'
    } else{
        newGame.difficulty = 0;
        this.innerText = 'DIFFICULTY: EASY'
    }
}

function changeMode(){
    if (newGame.mode == 'timer'){
        newGame.mode = 'SURVIVAL';
        this.innerText = 'MODE: SURVIVAL'
    } else{
        newGame.mode = 'timer';
        this.innerText = 'MODE: TIMER'
    } 
}


function initializeButtons() {
    document.getElementById('start-button').addEventListener('click', function () {
        dom.resetPage();
        dom.renderGamePage();
        newGame.startGame(1000);
        setInterval(function () {dom.renderLetters(newGame.letters)}, 100);
    });

    document.getElementById('difficulty-button').addEventListener('click', changeDifficulty);
    document.getElementById('mode-button').addEventListener('click', changeMode);
}


initializeButtons();
