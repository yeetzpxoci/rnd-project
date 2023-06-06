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
        difficulty: 0,
        mode: 'timer',

        spawnRandomLetter() {
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const randomIndex = Math.floor(Math.random() * alphabet.length);

            const newLetter = letter(alphabet.charAt(randomIndex));

            let randomX = Math.floor(Math.random() * (window.innerWidth - 200)) + 100;
            let randomY = Math.floor(Math.random() * (window.innerHeight - 200)) + 100;
            console.log(window.innerWidth, window.innerHeight)

            const gap = 200;

            let overlaps;

            // prevent overlapping
            do {
                randomX = Math.floor(Math.random() * (window.innerWidth - 200)) + 100;
                randomY = Math.floor(Math.random() * (window.innerHeight - 200)) + 100;

                overlaps = false;

                for (let i = 0; i < this.positions.length; i++) {
                    const position = this.positions[i];
                    const distance = Math.sqrt((position.x - randomX) ** 2 + (position.y - randomY) ** 2);
                    if (distance < gap) {
                        overlaps = true;    
                    }
                }
            } while (overlaps);

            this.positions.push({x: randomX, y: randomY});

            newLetter.x = randomX;
            newLetter.y = randomY;
            this.letters.push(newLetter);
            
            console.log(newLetter);
        },

        startGame(time) {
            let seconds = time * 60;
            let intervalID = setInterval(() => {
                if (seconds != 0) {
                    this.spawnRandomLetter();
                    seconds--;
                } else {
                    clearInterval(intervalID);
                }
            }, 1000 / (this.difficulty + 1));
        },

        removeLetter() {
            this.letters.shift();
        }
    }
}

export { game };