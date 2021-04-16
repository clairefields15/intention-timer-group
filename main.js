var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var activityButtons = document.querySelector('.button-row')
var minutesInput = document.getElementById("minutes");
var secondsInput = document.getElementById("seconds");
var startActivityButton = document.getElementById('startActivityButton');
var startTimerButton = document.getElementById('startButton');
var logActivityButton = document.getElementById('logActivityButton');
var accomplishInput = document.querySelector('#descriptionInput');
var categoryError = document.getElementById('categoryError');
var descriptionError = document.getElementById('descriptionError');
var minutesError = document.getElementById('minutesError');
var secondsError = document.getElementById('secondsError');
var leftSection = document.getElementById('leftSection');
var timerDisplay = document.getElementById('timerDisplay');
var activityForm = document.getElementById('activityForm')
var activity = document.getElementById('newActivity');

var loggedActivities = [];
var currentActivity;

////////// EVENT LISTENERS ///////////////
activityButtons.addEventListener('click', activateButton);
startActivityButton.addEventListener('click', startActivity);
// startTimerButton.addEventListener('click', startTimer);
// logActivityButton.addEventListener('click', );

minutesInput.addEventListener("keypress", function (event) {
  if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
    event.preventDefault();
  }
});

secondsInput.addEventListener("keypress", function (event) {
  if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
    event.preventDefault();
  }
});

///////////// EVENT HANDLERS & FUNCTIONS ///////////////
function activateButton(event) {
  event.preventDefault();
  var category = event.target.id
  if (category === "studyButton") {
    addColor(studyButton, "study-button-active");
    removeColor(meditateButton, "meditate-button-active");
    removeColor(exerciseButton, "exercise-button-active");
    disableStudyButton();
  } else if (category === "meditateButton") {
    addColor(meditateButton, "meditate-button-active");
    removeColor(studyButton, "study-button-active");
    removeColor(exerciseButton, "exercise-button-active");
    disableMeditateButton();
  } else if (category === "exerciseButton") {
    addColor(exerciseButton, "exercise-button-active");
    removeColor(studyButton, "study-button-active");
    removeColor(meditateButton, "meditate-button-active");
    disableExerciseButton();
  }
}

function addColor(button, clickedClass){
  button.classList.add(clickedClass)
}
function removeColor(button, clickedClass){
  button.classList.remove(clickedClass)
}

function disableStudyButton() {
  if (studyButton.disabled = true) {
    meditateButton.disabled = false;
    exerciseButton.disabled = false;
  }
}

function disableMeditateButton() {
  if (meditateButton.disabled = true) {
    studyButton.disabled = false;
    exerciseButton.disabled = false;
  }
}

function disableExerciseButton() {
  if (exerciseButton.disabled = true) {
    studyButton.disabled = false;
    meditateButton.disabled = false;
  }
}

function startActivity() {
  event.preventDefault();
  if(!checkForErrors()) {
    //create new instance out of the user input
    // var currentActivity = new Activity(all our .value)
    hideElement(activityForm);
    activity.innerText = 'Current Activity'
    showElement(timerDisplay);
    //show timer display with all info and correct color border
    //render this.minutes and this.seconds in the DOM
    //render border color in the DOM
    // if this.category is study classList.add(start-study-button)
    // if this.category is meditate, classList.add(start-meditate-button)
    // if this.category is exercise, classList.add(start-exercise-button)
  }
}

function checkForErrors() {
  var hasError = false;
  debugger
  if(preventButtons()) {
    hasError = true;
  }
  if (preventAccomplish()) {
    hasError = true;
  }
  if (preventMinutes()) {
    hasError = true;
  }
  if (preventSeconds()) {
    hasError = true;
  }
  return hasError
}

function preventButtons() {
  if(studyButton.disabled || meditateButton.disabled || exerciseButton.disabled) {
    hideElement(categoryError)
  } else {
    showElement(categoryError)
    return true
  }
}

function preventAccomplish() {
  if (!accomplishInput.value) {
    showElement(descriptionError);
    return true;
  } else {
    hideElement(descriptionError)
  }
}

function preventMinutes() {
  if (!minutesInput.value){
    showElement(minutesError)
    return true;
  } else{
    hideElement(minutesError)
  }
}

function preventSeconds() {
  if (!secondsInput.value){
    showElement(secondsError)
    return true;
  } else{
    hideElement(secondsError)
  }
}

function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}
