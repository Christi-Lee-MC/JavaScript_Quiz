// const quizContainer = document.getElementById("quiz");
const scoreContainer = document.getElementById("score");
const startButton = document.getElementById("start");
const questionTitle = document.getElementById("question");
const questionChoices = document.getElementById("choices");
var questionIndex = 0;
var timerEl = document.getElementById("timer");
var time = 60;
var timerInterval;

// do consts need to be at the top all together or should quizQuestions
// be after buildQuiz()? ans

const quizQuestions = [
  {
    question: "What was the name of Angela's cat that Dwight killed?",
    choices: ["Skittles", "Smushie", "Sammie", "Sprinkles"],
    correctChoice: "Sprinkles",
  },
  {
    question: "Where did Jim & Pam have their first kiss?",
    choices: ["IHOP", "Chilis", "Applebees", "Texas Roadhouse"],
    correctChoice: "Chilis",
  },
  {
    question: "Meridith has a degree in what?",
    choices: [
      "Forensic Accounting",
      "Organizational Psychology",
      "School Psychology",
      "Business With Quality Emphasis",
    ],
    correctChoice: "School Psychology",
  },
  {
    question:
      "Stanley's favorite day is Pretzel Day.  What day is Pretzel Day?",
    choices: ["Wednesday", "March 16", "Tuesday", "April 26"],
    correctChoice: "April 26",
  },
  {
    question: "How much did Bob Vance bid on his wife, Phyllis' hug?",
    choices: ["$1000", "$150", "$1500", "$100"],
    correctChoice: "$1000",
  },
];

// create functions

function timer() {
time--
timerEl.textContent=time

}

// show instructions and start button

function createQuiz() {
  console.log("testing");
  var instructions = document.getElementById("instructions");
  instructions.setAttribute("class", "hide");
  timerInterval=setInterval(timer, 1000);
  timerEl.textContent=time;
  getQuestions();
}
startButton.onclick = createQuiz;


// this is the function to retrieve all the questions and choices
function getQuestions() {
  var currentQuestion = quizQuestions[questionIndex];
  questionTitle.textContent = currentQuestion.question;
questionChoices.innerHTML = ""

  // do I use let to loop through the array? Do I loop currentQuestion or questionIndex?
  for (let i = 0; i < currentQuestion.choices.length; i++) {
      var choiceButton = document.createElement("button");
      choiceButton.setAttribute("value", currentQuestion.choices [i]);
      choiceButton.textContent = currentQuestion.choices [i];
      choiceButton.onclick = checkChoice;
      questionChoices.append(choiceButton);

  }
}

// need a function to check user answers
function checkChoice() {
if (this.value !== quizQuestions[questionIndex].correctChoice){
    // subtract 10 seconds for time
    time-=10;
    timerEl.textContent=time;
}
else {
    console.log("correct choice");

}

questionIndex++
    if (questionIndex === quizQuestions.length) {
        // call endQuiz() which isn't created yet
endQuiz();
    }
    else {
      getQuestions();

    }
}

// add high scores progressively ADD SORT()?



// display the users end score
// function saveScore () {
//   var highScore = document.getElementById('highScore');
//   var saveScoreEl= document.createElement("highScore");
//   saveScore.appendChild(highScore);
//   div.className = "highScore"
//   div.innerHTML = <input type='text' name='saveScoreEl []' value='highScore' />;

function saveHighScore =

  // var gameOverHTML = "<h2>Quiz Over!  Thank you for playing!</h2>";
  // gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
// }
// // end the quiz when either timer ends or
// // all questions are answered

function endQuiz () {
clearInterval(timerInterval);
var quizContainer = document.getElementById("quiz-container");
quizContainer.setAttribute("class", "hide");
var score = document.getElementById("score");
score.removeAttribute("class");
var highScore = document.getElementById("highScore");
highScore.removeAttribute("class");
score.textContent=time;
}





