import { DOM } from './DOM.js'
import { game } from './gameLogic.js'


const dom = DOM();
const newGame = game();

dom.renderStartPage();

function initializeButtons() {
    document.getElementById('start-button').addEventListener('click', function () {
        dom.resetPage();
        newGame.startGame(1000);
        setInterval(function () {dom.renderGame(newGame.letters)}, 100);
    });
    document.getElementById('difficulty-button').addEventListener('click', dom.renderStartPage);
    document.getElementById('mode-button').addEventListener('click', dom.resetPage);
}

initializeButtons();
