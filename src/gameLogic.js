function letter(letter) {
    return {
        letter: letter,
        point: 0,
        x: 0,
        y: 0, 
    }
}

function game() {
    return {
        letters: [],
        totalScore: 0,
        time: 0.5, // in minutes
        difficulty: 0,
        mode: 'time',

        spawnRandomLetter() {
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            const newLetter = letter(alphabet.charAt(randomIndex));
            newLetter.x = Math.floor(Math.random() * window.innerWidth);
            newLetter.y = Math.floor(Math.random() * window.innerHeight);
            this.letters.push(newLetter);
            console.log(newLetter);
        },

        startGame(interval) {
            let seconds = this.time * 60;
            let intervalID = setInterval(() => {
                if (seconds != 0) {
                    this.spawnRandomLetter();
                    seconds--;
                } else {
                    clearInterval(intervalID);
                }
            }, interval);
        }
    }
}

export { game };