import { DOM } from './DOM.js'
import { game } from './gameLogic.js'


const dom = DOM();
const newGame = game();

dom.renderStartPage();




function initializeButtons() {
    document.getElementById('start-button').addEventListener('click', function () {
        dom.resetPage();
        dom.renderGamePage();
        newGame.startGame(1000);
        setInterval(function () {dom.renderLetters(newGame.letters)}, 100);
    });
    document.getElementById('difficulty-button').addEventListener('click', dom.resetPage);
    document.getElementById('mode-button').addEventListener('click', dom.resetPage);
}

console.log()


initializeButtons();
