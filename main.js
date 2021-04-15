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

var loggedActivities = [];
var currentActivity;

////////// EVENT LISTENERS ///////////////
activityButtons.addEventListener('click', activateButton);
startActivityButton.addEventListener('click', startActivity);
// startTimerButton.addEventListener('click', );
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
  } else if (category === "meditateButton") {
    addColor(meditateButton, "meditate-button-active");
    removeColor(studyButton, "study-button-active");
    removeColor(exerciseButton, "exercise-button-active");
  } else if (category === "exerciseButton") {
    addColor(exerciseButton, "exercise-button-active");
    removeColor(studyButton, "study-button-active");
    removeColor(meditateButton, "meditate-button-active");
  }
}

function addColor(button, clickedClass){
  button.classList.add(clickedClass)
}
function removeColor(button, clickedClass){
  button.classList.remove(clickedClass)
}

function startActivity() {
  event.preventDefault();
  preventButtons();
  preventAccomplish();
  preventMinutes();
  preventSeconds();
  //if no errors, create new instance
  // hideElement(leftSection);
  // showElement(timerDisplay);
  //on the timer page, show minutes, seconds, description, special color outline
}

function preventButtons() {
  var isClicked = false;
  for (var i = 0; i < activityButtons.length ; i++) {
    if(!activityButtons[i].disabled) {
      isClicked = true;
    }
  }
  if(!isClicked) {
    categoryError.classList.remove('hidden')
  }
}

function preventAccomplish() {
  if (!accomplishInput.value) {
    descriptionError.classList.remove('hidden')
  }
}

function preventMinutes() {
  if (!minutesInput.value){
    minutesError.classList.remove('hidden')
  }
}

function preventSeconds() {
  if (!secondsInput.value){
    secondsError.classList.remove('hidden')
  }
}

function showElement(element) {
  element.classList.remove('hidden');
}


function hideElement(element) {
  element.classList.add('hidden');
}
