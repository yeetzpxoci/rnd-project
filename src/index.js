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
    document.getElementById('difficulty-button').addEventListener('click', console.log('hey'));
    document.getElementById('mode-button').addEventListener('click', console.log('hey'));
}

initializeButtons();
