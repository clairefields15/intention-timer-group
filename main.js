//A user should see an error message if they attempt to submit the
//form without filling out all fields. (Note: The comp shows the error
//message for forgetting a description - You should mimic this error
//messaging for all inputs.
var activityButtons = document.getElementById("buttonRow");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var startActivityButton = document.getElementById('startActivityButton');
var startTimerButton = document.getElementById('startButton');
var logActivityButton = document.getElementById('logActivityButton');

var loggedActivities = [];
var currentActivity;
////////// EVENT LISTENERS ///////////////
activityButtons.addEventListener('click', activateButton);
startActivityButton.addEventListener('click', startActivity);
startTimerButton.addEventListener('click', );
logActivityButton.addEventListener('click', );

minutes.addEventListener("keypress", function (event) {
  if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
    event.preventDefault();
  }
});
seconds.addEventListener("keypress", function (event) {
  if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
    event.preventDefault();
  }
});

///////////// EVENT HANDLERS & FUNCTIONS ///////////////
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

function startActivity() {
  preventEmptyInput();
  //prevent empty input
  //prevent e in numbers
  //if no errors, create new instance
  //switch to timer page
  //on the timer page, show minutes, seconds, description, special color outline
}

function preventEmptyInput() {
  if (input.value === '') {
    error.classList.remove('hidden');
  }
};
