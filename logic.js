// variables to keep track of quiz state
// currentQuestion
let currentQuestion = "thisisconfusing";
// time
// timerId
// variables to reference DOM elements
let questionsEl = document.getElementById("questions");
let countDown = document.getElementById("count");
let startClock = $("#start-button");
let startScreen = document.querySelector("#start-screen");
console.log(startScreen);

/* FUNCTION TO START THE QUIZ */
function startQuiz() {
  // hide start screen
  startScreen.setAttribute("class", "hide");
  questionsEl.removeAttribute("class", "hide");
  for (var i = 0; i < questions.length; i++) {
    if (i < questions.length) {
      console.log(questions);
      questionsEl.appendChild("li");
    }
  }
}
// un-hide questions section
// start timer

// show starting time

//   getQuestion();

/* FUNCTION TO GET/SHOW EACH QUESTION */
function getQuestions() {
  // get current question object from array
  // update title with current question
  // clear out ant old question choices
  // loop over choices
  // FOR {
  // create new button for each choice
  // display on the page
  // }
}

/* FUNCTION FOR CLICKING A QUESTION */
function questionClick(event) {
  // if the clicked element is not a choice button, do nothing.
  if (something) {
  }

  // check if user guessed wrong
  if (something) {
    // penalize time
    // display new time on page
    // give them feedback, letting them know it's wrong
  } else {
    // give them feedback, letting them know it's right
  }

  // flash right/wrong feedback on page for a short period of time

  // move to next question

  // check if we've run out of questions
  // if so, end the quiz
  // else, get the next question
}

/* FUNCTION TO END THE QUIZ */
function quizEnd() {
  // stop timer
  // show end screen
  // show final score
  // hide questions section
}

/* FUNCTION FOR UPDATING THE TIME */

function saveHighscore() {
  // get value of input box - for initials
  // make sure value wasn't empty
  // get saved scores from localstorage, or if not any, set to empty array
  // format new score object for current user
  // save to local storage
  // redirect to next page
}

/* CLICK EVENTS */
// user clicks button to submit initials

// user clicks button to start quiz
startClock.on("click", function click() {
  startQuiz();
});

// user clicks on element containing choices
