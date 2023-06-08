function DOM() {
    return {   
        resetPage() {
            document.body.innerHTML = '';
        },

        renderStartPage() {
            document.body.innerHTML = '';

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

            if (JSON.parse(localStorage.getItem("highscore") != null && localStorage.getItem("highscore") != 0)) {
                const highscore = document.createElement("span");
                highscore.setAttribute("id", "highscore");
                highscore.innerText = "HIGHSCORE:" + JSON.parse(localStorage.getItem("highscore"));
                startContainer.append(highscore);
            }

            buttonContainer.append(startButton, difficultyButton, modeButton);
            document.body.appendChild(startContainer);
        },

        renderTimerGamePage(time, totalScore) {
            document.body.innerHTML = '';

            const gameContainer = document.createElement('div')
            gameContainer.id = 'game-container'

            const gameWrapper = document.createElement('div');
            gameWrapper.id = 'game-wrapper';

            const timerScoreContainer = document.createElement('div');
            timerScoreContainer.id = 'timer-score-container';

            let seconds = time * 60;

            const timer = document.createElement('span');
            timer.id = 'timer';
            timer.innerHTML = seconds;

            const score = document.createElement('span');
            score.innerHTML = 'Score:' + totalScore;
            score.id = 'score';

            setInterval(function () {
                if (seconds != 0) {
                    seconds -= 1;
                } else {
                    clearInterval();
                }

                timer.innerHTML = seconds;
            }, 1000);

            timerScoreContainer.append(score, timer);
            gameContainer.append(timerScoreContainer, gameWrapper);
            document.body.append(gameContainer);
        },

        renderSurvivalGamePage(totalScore) {
            document.body.innerHTML = '';

            const gameContainer = document.createElement('div')
            gameContainer.id = 'game-container'

            const gameWrapper = document.createElement('div');
            gameWrapper.id = 'game-wrapper';

            const timerScoreContainer = document.createElement('div');
            timerScoreContainer.id = 'timer-score-container';

            const score = document.createElement('span');
            score.innerHTML = 'Score:' + totalScore;
            score.id = 'score';

            timerScoreContainer.append(score);
            gameContainer.append(timerScoreContainer, gameWrapper);
            document.body.append(gameContainer);
        },

        renderLetters(letterArray) {
            if (letterArray.length < 20) {
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
        },

        endGame(callback) {
            const gameOverMenu = document.createElement('div');
            gameOverMenu.id = 'game-over-menu';

            const menuButton = document.createElement('span');
            menuButton.id = 'button-menu';
            menuButton.innerHTML = 'Menu';

            const dom = this; 

            menuButton.onclick = function () {
                dom.renderStartPage();
                callback();
            };

            gameOverMenu.append(menuButton);
            document.body.append(gameOverMenu);
        }
    }
}

export { DOM };


