import { DOM } from './DOM.js'
import { game } from './gameLogic.js'


const dom = DOM();
const newGame = game();

dom.renderStartPage();
newGame.startGame(1000);

function initializeButtons() {
    document.getElementById('start-button').addEventListener('click', function () {
        dom.resetPage();
        newGame.startGame();
        dom.renderGame();
    });
    document.getElementById('difficulty-button').addEventListener('click', dom.renderStartPage);
    document.getElementById('level-button').addEventListener('click', dom.resetPage);
}

initializeButtons();
