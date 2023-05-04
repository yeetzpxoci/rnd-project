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
            difficultyButton.innerText = "DIFFICULTY";

            const modeButton = document.createElement("button");
            modeButton.setAttribute("id", "mode-button");
            modeButton.innerText = "MODE";

            buttonContainer.append(startButton, difficultyButton, modeButton);
            document.body.appendChild(startContainer);
        },

        renderGame(letterArray) {
            // render the letters on the screen
        }
    }
}

export { DOM };