// Declaring variables

// Capture win window
let winWindow = document.querySelector('.win');

// Declae win reset button
let winResetButton = document.querySelector('.winReset');

// define lose reset button
let loseResetButton = document.querySelector('.loseReset');

// define lose window
let loseWindow = document.querySelector('.lose');

// define win image
// let winImage = document.querySelector('.winImage')

// define a message if the payer loses the game
let loseMessage = document.querySelector('#losePar');

// define
let video = document.querySelector('#myVideo');

// Get Body content
let body = document.querySelector('body');

// This will hold category information
let category = document.querySelector('.category');

// This will hold the question
let question = document.querySelector('.questionBox');

// This is for all response buttons
let answerButtons = document.querySelector('.answersButtons');

// Define difficulty buttons
let difficultyButtons = document.querySelector('.difficulties-container');

// Define image
// let image = document.querySelector('img');

// Define audio button
let audioButton = document.querySelector('.audio');

// Declaring individual difficulty buttons
let easyButton = document.querySelector('#easy');
let mediumButton = document.querySelector('#medium');
let hardButton = document.querySelector('#hard');

// This is for individual responses
let response1 = document.querySelector('#response1');
let response2 = document.querySelector('#response2');
let response3 = document.querySelector('#response3');
let response4 = document.querySelector('#response4');

// Define the total number of questions' box.
let totNumQuestionsBox = document.querySelector('#questionNumber');

// This will hold number of correct answers
let cAnswer = document.querySelector('#correct');

// This will hold number of wrong answers
let wAnswer = document.querySelector('#wrong');

// Define the "show answer" button
let showAnswerButton = document.querySelector('#showAnswer');

let corrAnswer;

// Create new audio objects
// Code source: https://www.w3schools.com/jsref/met_audio_play.asp
let audio = new Audio('general-logo-13395.mp3');

let questionscoreCount = 0;
let correctAnswerScoreCount = 0;
let wrongAnswerscoreCount = 0;
let scoreCount = 0;
let clear = '';
let difficulty = '';

// Set winning scoreCount
let winningscoreCount = 6;

let highscoreCount = 0;

let startGame = document.querySelector('.startGame');

// Takes the response from fetch
let triviaQuestion;

// Define a global url which will be accessed by multiple functions
let url;

// Array of all Images/jpg
// https://www.pexels.com/search/environment/
// let arrayImages = [];
// arrayImages.push('pexels-ákos-szabó-440731.jpg');
// arrayImages.push('pexels-atikul-haque-rafat-679598.jpg');
// arrayImages.push('pexels-felix-mittermeier-957024.jpg');
// arrayImages.push('pexels-ian-turnell-709552.jpg');
// arrayImages.push('pexels-karolina-grabowska-5750182.jpg');
// arrayImages.push('pexels-mahima-1250260.jpg');
// arrayImages.push('pexels-mali-maeder-142497.jpg');
// arrayImages.push('pexels-matthias-cooper-580900.jpg');
// arrayImages.push('pexels-min-an-1131458.jpg');
// arrayImages.push('pexels-minamarie-michell-570041.jpg');
// arrayImages.push('pexels-olya-kobruseva-5236397.jpg');
// arrayImages.push('pexels-pixabay-33044.jpg');
// arrayImages.push('pexels-pixabay-221012.jpg');
// arrayImages.push('pexels-pixabay-235615.jpg');
// arrayImages.push('pexels-pixabay-259280.jpg');
// arrayImages.push('pexels-pixabay-302804.jpg');
// arrayImages.push('pexels-pixabay-414090.jpg');
// arrayImages.push('pexels-pixabay-459225.jpg');
// arrayImages.push('pexels-pixabay-459225.jpg');
// arrayImages.push('pexels-pixabay-460621.jpg');
// arrayImages.push('pexels-scott-webb-1048033.jpg');
// arrayImages.push('pexels-skitterphoto-9198.jpg');
// arrayImages.push('pexels-sohail-na-807598.jpg');

// for correct and wrong answer song; source code:
// https://www.dreamstime.com/stock-music-sound-effect/wrong-answer-answer.html

// Reset the game when the "Reset" button is clicked
let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {

    // Code source: https://www.w3schools.com/jsref/met_audio_play.asp
    audio.volume = 0.2;

    // Refresh the page/window
    window.location.reload();
});

// Assign color to all answer buttons and call "play" function
let startButton = () => {

    // Increament the score count.
    scoreCount++;

    // Select all responses buttons.
    let responses = document.querySelectorAll('.response');
    responses.forEach(response => {
        response.style.backgroundImage = 'linear-gradient(rgb(173, 202, 9), rgb(57, 14, 214));'
    })

    // When the "Start The Game" button is presNexted, Call "play" function
    play();
}

// Select difficulty buttons
difficultyButtons.addEventListener('click', e => {

    // Target the element/button by its id.
    difficulty = e.target.id;

    // Only change the color "easy" button is selected, then enable "Start The Game"
    if (difficulty === 'easy') {

        // Only change the background of "easy button" to a different color, and let other bottons'
        // colors unchanged.
        e.target.style.backgroundImage = 'linear-gradient(rgb(9, 25, 202), rgb(81, 14, 214))';
        mediumButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        hardButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;

        // Start the Game when "Start The Game" is clicked
        let startGame = document.querySelector('.startGame');
        startGame.addEventListener('click', () => {
            startButton();
        });
    }

    // Only change the color "medium" button is selected, then enable "Start The Game"
    else if (difficulty === 'medium') {

        // Only change the background of "medium button" to a different color, and let other bottons'
        // colors unchanged.
        e.target.style.backgroundImage = 'linear-gradient(rgb(9, 25, 202), rgb(81, 14, 214))';
        easyButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        hardButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;

        // Start the Game when "Start The Game" is clicked
        startGame.addEventListener('click', () => {
            startButton();
        });
    }

    // Only change the color "hard" button is selected, then enable "Start The Game"
    else if (difficulty === 'hard') {

        // Only change the background of "hard button" to a different color, and let other bottons'
        // colors unchanged.
        e.target.style.backgroundImage = 'linear-gradient(rgb(9, 25, 202), rgb(81, 14, 214))';
        mediumButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        easyButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;



        // Start the Game when "Start The Game" is clicked
        startGame.addEventListener('click', () => {
            startButton();
        });
    }

    // Return the value of the chosen difficulty button.
    return difficulty;
})



// Play the game when the start game button is click.
function play() {

    // Define and get a random number
    // Source: https://www.w3schools.com/jsref/jsref_random.asp
    let randomQuestion = Math.floor(Math.random() * 10 + 9);

    // Get the question from the API
    // Source: https://opentdb.com/api_config.php
    url = `https://opentdb.com/api.php?amount=50&difficulty=${difficulty}&type=multiple`

    // Define an empty array that will hold the correct answer and 3 wrong answers
    let arr = [];

    // fetch the the result for the above url.
    fetch(url)
        .then(res => {
            return res.json()
        })

        .then(res => {

            triviaQuestion = res;

            // Capture the correct from the response
            corrAnswer = res.results[0].correct_answer;

            arr.push(res.results[0].correct_answer);
            arr.push(res.results[0].incorrect_answers[0])
            arr.push(res.results[0].incorrect_answers[2])
            arr.push(res.results[0].incorrect_answers[1])

            category.innerHTML = res.results[0].category
            question.innerHTML = res.results[0].question

            // Assigning answers to answers buttons
            response1.innerHTML = arr[0];
            response2.innerHTML = arr[1];
            response3.innerHTML = arr[2];
            response4.innerHTML = arr[3];

            // Shuffling the array to avoid answers pattern.
            for (let i = arr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1))

                let tempNum = arr[i];
                arr[i] = arr[j];
                arr[j] = tempNum;
            }
        })
}


// Track the clicking event of each answerButton
answerButtons.addEventListener('click', (event) => {

    // Check if the selected answer is equal to correct answer
    if (event.target.innerText === triviaQuestion.results[0].correct_answer) {

        // Increment total number of question
        scoreCount++;

        // Increament the the number of correct answers.
        correctAnswerScoreCount++;

        // Write the correct answer in the correct answer box
        cAnswer.innerText = correctAnswerScoreCount;

        for (let i = arrayImages.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))

            let tempNum = arrayImages[i];
            arrayImages[i] = arrayImages[j];
            arrayImages[j] = tempNum;
        }

        // Play a random video
        image.src = arrayImages[1];

        // Set the background of the correct answer to green
        event.target.style.backgroundImage = `linear-gradient(rgb(0, 255, 106),
        rgb(9, 106, 28))`;

        // Call the next question
        nextQuestion()
    }

    // Check if the selected answer is not equal to the correct answer
    else if (event.target.innerText !== triviaQuestion.results[0].correct_answer) {

        // Play this audio if the answer is incorrect
        let audioWrongAnswer = new Audio('wrongAnswer.mp3');


        for (let i = arrayImages.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))

            let tempNum = arrayImages[i];
            arrayImages[i] = arrayImages[j];
            arrayImages[j] = tempNum;
        }

        // Play a random video
        image.src = arrayImages[0];

        // Incremment scoreCount
        scoreCount++;

        // Increament the the number of incorrect answers.
        wrongAnswerscoreCount++;

        // Set the background of the correct answer to red
        event.target.style.backgroundImage = 'linear-gradient(rgb(220, 7, 7), #fa0a0a)';

        // Write the incorrect answer in the wrong answer box
        wAnswer.innerHTML = wrongAnswerscoreCount;
    }

    // Call the next question
    nextQuestion();
})

// Refresh the window reset all numbers to 0 and all texts to empty.
function refreshWindow() {
    window.location.reload()
}

// This function runs when the player calls for the next question.
function nextQuestion() {


    // Source: https://www.w3schools.com/jsref/jsref_random.asp
    let randomQuestions = Math.floor(Math.random() * 10 + 9);

    let urlNext = `https://opentdb.com/api.php?amount=1&category=${randomQuestions}&type=multiple`

    let arrNext = [];

    fetch(urlNext)
        .then(resNext => {
            return resNext.json()
        })

        .then(resNext => {

            // Capture the correct from the response
            corrAnswer = resNext.results[0].correct_answer;

            // Assign the response from fetch to triviaQuestion
            triviaQuestion = resNext;

            arrNext.push(resNext.results[0].correct_answer);
            arrNext.push(resNext.results[0].incorrect_answers[0])
            arrNext.push(resNext.results[0].incorrect_answers[2])
            arrNext.push(resNext.results[0].incorrect_answers[1])

            // Shuffling the array to avoid answers pattern.
            // source: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/

            for (let i = arrNext.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1))

                let tempNums = arrNext[i];
                arrNext[i] = arrNext[j];
                arrNext[j] = tempNums;
            }

            // Assigning original coloanswers to answers buttons
            response1.innerHTML = arrNext[0];
            response1.style.backgroundImage = 'linear-gradient(rgb(173, 202, 9), rgb(57, 14, 214))'

            response2.innerHTML = arrNext[1];
            response2.style.backgroundImage = 'linear-gradient(rgb(173, 202, 9), rgb(57, 14, 214))'

            response3.innerHTML = arrNext[2];
            response3.style.backgroundImage = 'linear-gradient(rgb(173, 202, 9), rgb(57, 14, 214))'

            response4.innerHTML = arrNext[3];
            response4.style.backgroundImage = 'linear-gradient(rgb(173, 202, 9), rgb(57, 14, 214))'

            category.innerHTML = resNext.results[0].category
            question.innerHTML = resNext.results[0].question

            console.log(resNext.results[0])

        })
}

// Display the answer if the "show Andwer" button is clicked for 1 second, then hide the answer.
showAnswerButton.addEventListener('click', () => {
    let answerBox = document.querySelector('.showAnswer');

    setTimeout(function () {
        answerBox.style.visibility = 'visible';
        answerBox.style.zIndex = '100';

        answerBox.innerHTML = corrAnswer;
        //Hide the answer
        setTimeout(function () {
            answerBox.style.visibility = 'hidden';

        }, 1000)
    }, 1000)

    if (answerBox.innerHTML === 'undefined') {
        answerBox.innerHTML = "Loading the answer...";
    }
    else {
        answerBox.innerHTML = "Loading the answer...";
    }
})




