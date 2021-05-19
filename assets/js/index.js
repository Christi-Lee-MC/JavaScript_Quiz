const quizContainer = document.getElementById("quiz");
const scoreContainer = document.getElementById("results");
const startButton = document.getElementById("start");

// do consts need to be at the top all together or should quizQuestions
// be after buildQuiz()?

const quizQuestions = [
  {
    question: "What was the name of Angela's cat that Dwight killed?",
    choices: {
      a: "Skittles",
      b: "Smushie",
      c: "Sammie",
      d: "Sprinkles",
    },
    correctChoice: "d"
  },
  {
    question: "Where did Jim & Pam have their first kiss?",
    choices: {
      a: "Ihop",
      b: "Chilis",
      c: "Applebees",
      d: "Texas Roadhouse",
    },
    correctChoice: "b"
  },
  {
    question: "Meridith has a degree in what?",
    choices: {
      a: "Forensic Accounting",
      b: "Organizational Psychology",
      c: "School Psychology",
      d: "Business With Quality Emphasis",
    },
    correctChoice: "c"
  },
  {
    question: "Stanley's favorite day is Pretzel Day.  What day is Pretzel Day?",
    choices: {
      a: "Wednesday",
      b: "March 16",
      c: "Tuesday",
      d: "April 26",
    },
    correctChoice: "d"
  },
  {
    question: "How much did Bob Vance bid on his wife, Phyllis' hug?",
    choices: {
      a: "$1000",
      b: "$150",
      c: "$1500",
      d: "$100",
    },
    correctChoice: "a"
  },
];

// create functions
// show instructions and start button

function buildQuiz() {}

function showScore() {}

// display quiz right away
buildQuiz();

// on start, beginQuiz
startButton.addEventListener("click", beginQuiz);
