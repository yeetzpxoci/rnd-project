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

        renderGamePage() {
            const gameContainer = document.createElement('div');
            gameContainer.id = 'game-container';
            document.body.append(gameContainer);
        },

        renderLetters(letterArray) {
            const gameContainer = document.querySelector('#game-container');
            gameContainer.innerHTML = '';

            for (let i = 0; i < letterArray.length; i++) {
                const newLetter = document.createElement('p');
                newLetter.innerText = letterArray[i].letter;
                newLetter.className = 'letter';
                newLetter.style.left = letterArray[i].x + 'px';
                newLetter.style.top = letterArray[i].y + 'px';
                gameContainer.appendChild(newLetter);
            }
        }
    }
}

export { DOM };