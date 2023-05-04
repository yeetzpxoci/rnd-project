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
        positions: [],
        totalScore: 0,
        time: 0.5, // in minutes
        difficulty: 0,
        mode: 'timer',

        spawnRandomLetter() {
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const randomIndex = Math.floor(Math.random() * alphabet.length);

            const newLetter = letter(alphabet.charAt(randomIndex));

            let randomX = Math.floor(Math.random() * (window.innerWidth - 32)) + 16;
            let randomY = Math.floor(Math.random() * (window.innerHeight - 32)) + 16;

            const gap = 16;

            let overlaps;

            // prevent overlapping
            do {
                randomX = Math.floor(Math.random() * (window.innerWidth - 32)) + 16;
                randomY = Math.floor(Math.random() * (window.innerHeight - 32)) + 16;

                overlaps = false;

                for (let i = 0; i < this.positions.length; i++) {
                    const position = this.positions[i];
                    const distance = Math.sqrt((position.x - randomX) ** 2 + (position.y - randomY) ** 2);
                    if (distance < gap) {
                        overlaps = true;    
                    }
                }
            } while (overlaps);

            newLetter.x = randomX;
            newLetter.y = randomY;
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