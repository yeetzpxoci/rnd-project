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
            startButton.textContent = "START GAME";
            buttonContainer.appendChild(startButton);

            const difficultyButton = document.createElement("button");
            difficultyButton.setAttribute("id", "difficulty-button");
            difficultyButton.textContent = "DIFFICULTY";
            buttonContainer.appendChild(difficultyButton);

            document.body.appendChild(startContainer);
        },

        putLetterOnScreen() {
            // displays the letter on the screen
            // add event listener on the letter as well
        }
    }
}

export { DOM };