var startButtonEl = document.querySelector('#start-button');
var startContainerEl = document.querySelector('#start-container');
var questionContainerEl = document.querySelector('#question-container');
var questionEl = document.querySelector('#question');
var answerButtonsEl = document.querySelector('#answer-buttons');
var resultEl = document.querySelector('#result-container');
var endContainerEl = document.querySelector('#end-container');
var finalScoreEl = document.querySelector('#final-score');



let randomQuestion, currentQustionIndex;


var questions = [
    {
    question: 'Arrays in JavaScript can be used to store _______.',
    answer: [
        {text: "1. numbers and strings", correct: false},
        {text: "2. other arrays", correct: false},
        {text: "3. booleans", correct: false},
        {text: "4. all of the above", correct: true},
        ]
    },
    {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answer: [
        {text: "1. JavaScript", correct: false},
        {text: "2. terminal/bash", correct: false},
        {text: "3. for loops", correct: false},
        {text: "4. console.log", correct: true},
        ]
    },
    {
    question: 'Commonly used data types do NOT include:',
    answer: [
        {text: "1. strings", correct: false},
        {text: "2. booleans", correct: false},
        {text: "3. alerts", correct: true},
        {text: "4. numbers", correct: false},
        ]
    }
];

var startGame = function() {
    console.log('Game Start!');
    startContainerEl.classList.add('hidden');
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQustionIndex = 0;
    questionContainerEl.classList.remove('hidden');
    setNextQuestion();
};



// Choose a random question
var setNextQuestion = function() {
    resetState();
    showQuestion(randomQuestion[currentQustionIndex]);
};

var showQuestion = function(question){
    questionEl.innerText = question.question;
    question.answer.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        // if(answer.correct) {
        //     button.dataset.correct = answer.correct
        // }
        // button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    });
};

var resetState = function(){
    while(answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);

    }
};

// var selectAnswer = function(e) {
//     var selectButton = e.target;
//     var correct = selectButton.dataset.correct;
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsEl.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     });
    
// };

// var setStatusClass = function(element, correct) {
//     clearStatusClass(element);
//     if(correct){
//         element.classList.add('correct');
//     } else {
//         element.classList.add('wrong');
//     };
// };

// var clearStatusClass = function(element) {
//     element.classList.remove('correct');
//     element.classList.remove('wrong');
// }

var endGame = function(){
    questionContainerEl.classList.add('hidden');
    endContainerEl.classList.remove('hidden');
    var finalScore = "";
    finalScoreEl.innerText = 'Your final score is: ' + finalScore;
}

// Start Game by Clicking Start Buttion
startButtonEl.addEventListener('click', startGame);
// Trigger Next Question
answerButtonsEl.addEventListener('click', () => {
    currentQustionIndex++;
    console.log('currentQuestionIndex: ' + currentQustionIndex);
    if(randomQuestion.length < (currentQustionIndex + 1)){
        endGame();
    } else {
        setNextQuestion();
    };
});