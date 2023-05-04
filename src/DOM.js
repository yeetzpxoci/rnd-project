function DOM() {
    return {   
        letterPositions: [],

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
            difficultyButton.innerText = "DIFFICULTY";

            const modeButton = document.createElement("button");
            modeButton.setAttribute("id", "mode-button");
            modeButton.innerText = "MODE";

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
                let letterPosition = this.letterPositions[i];
                if (!letterPosition) {
                    letterPosition = {
                        x: Math.floor(Math.random() * window.innerWidth),
                        y: Math.floor(Math.random() * window.innerHeight)
                    };
                    this.letterPositions[i] = letterPosition;
                }

                const newLetter = document.createElement('p');
                newLetter.innerText = letterArray[i];
                newLetter.style.position = 'absolute';
                newLetter.style.left = letterPosition.x + 'px';
                newLetter.style.top = letterPosition.y + 'px';
                gameContainer.appendChild(newLetter);

                document.addEventListener

            }
        }
    }
}

export { DOM };


