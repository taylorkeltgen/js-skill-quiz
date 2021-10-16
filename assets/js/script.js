var startButtonEl = document.getElementById('start-button');
var startContainerEl = document.getElementById('start-container');
var questionContainerEl = document.getElementById('question-container');



var startGame = function() {
    console.log('Game Start!');
    startContainerEl.classList.add('hide');
    questionContainerEl.classList.remove('hide');
}

var setNextQuestion = function() {

}

var selectAnswer = function() {

}
startButtonEl.addEventListener('click', startGame);