function DOM() {
    return {   
        resetPage() {
            document.body.innerHTML = '';
        },

        renderStartPage() {
            const startContainer = document.createElement("div");
            startContainer.setAttribute("id", "start-container");

            const title = document.createElement("p");
            title.setAttribute("id", "title");
            title.textContent = "CLUK!";
            startContainer.appendChild(title);

            const buttonContainer = document.createElement("div");
            buttonContainer.setAttribute("id", "button-container");
            startContainer.appendChild(buttonContainer);

            const startButton = document.createElement("button");
            startButton.setAttribute("id", "start-button");
            startButton.innerText = "START GAME";

            const difficultyButton = document.createElement("button");
            difficultyButton.setAttribute("id", "difficulty-button");
            difficultyButton.innerText = "DIFFICULTY: EASY";

            const modeButton = document.createElement("button");
            modeButton.setAttribute("id", "mode-button");
            modeButton.innerText = "MODE: TIMER";

            buttonContainer.append(startButton, difficultyButton, modeButton);
            document.body.appendChild(startContainer);
        },

        renderGamePage(time) {
            const gameContainer = document.createElement('div')
            gameContainer.id = 'game-container'

            const gameWrapper = document.createElement('div');
            gameWrapper.id = 'game-wrapper';

            let seconds = time * 60;

            const timer = document.createElement('span');
            timer.innerHTML = seconds;

            setInterval(function () {
                seconds -= 1;
                timer.innerHTML = seconds;
            }, 1000);

            gameContainer.append(timer, gameWrapper);
            document.body.append(gameContainer);
        },

        renderLetters(letterArray) {
            const gameWrapper = document.querySelector('#game-wrapper');
            gameWrapper.innerHTML = '';

            for (let i = 0; i < letterArray.length; i++) {
                const newLetter = document.createElement('p');
                newLetter.innerText = letterArray[i].letter;
                newLetter.className = 'letter';
                newLetter.style.left = letterArray[i].x + 'px';
                newLetter.style.top = letterArray[i].y + 'px';
                gameWrapper.appendChild(newLetter);
            }
        }
    }
}

export { DOM };


