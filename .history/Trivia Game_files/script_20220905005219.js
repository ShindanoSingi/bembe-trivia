class TriviaGame {
    constructor() { }

    play() {
        let nameOfPlayer = prompt("What's your name?")
        let playerName = document.querySelector('.playerName');
        
        if (nameOfPlayer !== null) {
            playerName.innerHTML = `${nameOfPlayer}, Enjoy the game!`;
        }

        else {
            playerName.innerHTML = '      ';
        }
    }
}


let game1 = new TriviaGame()
game1.play();