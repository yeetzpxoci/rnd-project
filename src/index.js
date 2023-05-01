import { DOM } from './DOM.js'
import { game } from './gameLogic.js'

const dom = DOM();
const newGame = game();

newGame.startGame();

document.getElementById('difficulty-button').addEventListener('click', dom.renderStartPage);
document.getElementById('level-button').addEventListener('click', dom.resetPage);