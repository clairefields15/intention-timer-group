var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var allButtons = document.querySelectorAll('.cat-button');
var activityButtonContainer = document.querySelector('.button-row');
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
var activityForm = document.getElementById('activityForm');
var activity = document.getElementById('newActivity');

var loggedActivities = [];
var currentActivity;

////////// EVENT LISTENERS ///////////////
activityButtonContainer.addEventListener('click', activateButton);
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
  removeAllColors();
  var category = event.target.id;
  if (category === "study") {
    addColor(studyButton, "study-button-active");
    disableStudyButton();
  } else if (category === "meditate") {
    addColor(meditateButton, "meditate-button-active");
    disableMeditateButton();
  } else if (category === "exercise") {
    addColor(exerciseButton, "exercise-button-active");
    disableExerciseButton();
  }
};

function addColor(button, clickedClass){
  button.classList.add(clickedClass);
};

function removeColor(button, clickedClass){
  button.classList.remove(clickedClass);
};

function removeAllColors() {
  removeColor(meditateButton, "meditate-button-active");
  removeColor(exerciseButton, "exercise-button-active");
  removeColor(studyButton, "study-button-active");
};

function getSelectedCategory() {
  for(var i = 0; i <allButtons.length; i++) {
    if(allButtons[i].disabled) {
      return allButtons[i].id;
    }
  }
};

function disableStudyButton() {
  if (studyButton.disabled = true) {
    meditateButton.disabled = false;
    exerciseButton.disabled = false;
  }
};

function disableMeditateButton() {
  if (meditateButton.disabled = true) {
    studyButton.disabled = false;
    exerciseButton.disabled = false;
  }
};

function disableExerciseButton() {
  if (exerciseButton.disabled = true) {
    studyButton.disabled = false;
    meditateButton.disabled = false;
  }
};

function checkForErrors() {
  var hasError = false;
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
  return hasError;
};

function preventButtons() {
  if(studyButton.disabled || meditateButton.disabled || exerciseButton.disabled) {
    hideElement(categoryError);
  } else {
    showElement(categoryError);
    return true;
  }
};

function preventAccomplish() {
  if (!accomplishInput.value) {
    showElement(descriptionError);
    return true;
  } else {
    hideElement(descriptionError);
  }
};

function preventMinutes() {
  if (!minutesInput.value){
    showElement(minutesError);
    return true;
  } else {
    hideElement(minutesError);
  }
};

function preventSeconds() {
  if (!secondsInput.value){
    showElement(secondsError);
    return true;
  } else{
    hideElement(secondsError);
  }
};

function showElement(element) {
  element.classList.remove('hidden');
};

function hideElement(element) {
  element.classList.add('hidden');
};

function startActivity() {
  event.preventDefault();
  if(!checkForErrors()) {
    var category = getSelectedCategory();
    currentActivity = new Activity(category, accomplishInput.value, minutesInput.value, secondsInput.value);
    hideElement(activityForm);
    showElement(timerDisplay);
    activity.innerText = 'Current Activity';
    render();
  }
}

function render() {
  //render this.description in the dom where placeholder is
  //render this.minutes and this.seconds in the DOM
  //render border color in the DOM based on category
  // if this.category is study classList.add(start-study-button)
  // if this.category is meditate, classList.add(start-meditate-button)
  // if this.category is exercise, classList.add(start-exercise-button)
}
