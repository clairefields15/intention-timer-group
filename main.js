// GLOBAL VARIABLES
var activity;
var activityForm = document.getElementById("activityForm");
var boxTitle = document.getElementById("boxTitle");
var buttonRow = document.getElementById("buttonRow");
var category = '';
var description = document.getElementById("descriptionInput");
var logActivityButton = document.getElementById("logActivityButton");
var minutes = document.getElementById("minutes");
var numberInputs = document.getElementById("numberInputs");
var pastActivities = [];
var seconds = document.getElementById("seconds");
var secondsCountdown = document.getElementById("secondsCountdown");
var startActivityButton = document.getElementById("startActivityButton");
var startButton = document.getElementById("startButton");
var createNewButton = document.getElementById("createNewButton");
var timerDisplay = document.getElementById("timerDisplay");


//A user should see an error message if they attempt to submit the
//form without filling out all fields. (Note: The comp shows the error
//message for forgetting a description - You should mimic this error
//messaging for all inputs.)
////////////////// VARIABLES TO ACCESS DOM ////////////
var buttons = document.getElementById('buttonRow');
var startActivityButton = document.getElementById('startActivity');
var startTimerButton = document.getElementById('startTimer');
var logActivityButton = document.getElementById('logActivityButton');
var currentActivity;
var loggedActivities = [];
////////// EVENT LISTENERS ///////////////
buttons.addEventListener('click', activateButton);
// startActivityButton.addEventListener('click', startActivity);
// startActivityButton.addEventListener('click', );
// startTimerButton.addEventListener('click', );
// logActivityButton.addEventListener('click', );
///////////// EVENT HANDLERS & FUNCTIONS ///////////////
// function startActivity() {
//   preventEmptyInput();
  // prevent empty input
  // prevent e in numbers
  // if no errors, create new instance
  // switch to timer page
  // on the timer page, show minutes, seconds, description, special color outline
// }
// function preventEmptyInput() {
//   var input =
//   if (input == '') {
//   }
// }
// function onButtonClick() {
//   changeColor();
// }


function activateButton(event) {
  if (event.target.id === "studyButton") {
    addColor(studyButton, "study-button-active");
    removeColor(meditateButton, "meditate-button-active")
    removeColor(exerciseButton, "exercise-button-active")
  } else if (event.target.id === "meditateButton") {
    addColor(meditateButton, "meditate-button-active")
    removeColor(studyButton, "study-button-active")
    removeColor(exerciseButton, "exercise-button-active")
  } else if (event.target.id === "exerciseButton") {
    addColor(exerciseButton, "exercise-button-active")
    removeColor(studyButton, "study-button-active")
    removeColor(meditateButton, "meditate-button-active")
  }
  event.preventDefault();
  category = event.target.id
}

function addColor(button, clickedClass){
  button.classList.add(clickedClass)
}
function removeColor(button, clickedClass){
  button.classList.remove(clickedClass)
}
