function letter(letter) {
    return {
        letter: letter,
        point: 10,
        speed: 1,
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
            const newLetter = alphabet.charAt(randomIndex);
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