
//A user should see an error message if they attempt to submit the
//form without filling out all fields. (Note: The comp shows the error
//message for forgetting a description - You should mimic this error
//messaging for all inputs.)

////////////////// VARIABLES TO ACCESS DOM ////////////
var studyButton = document.getElementById('studyButton');
var exerciseButton = document.getElementById('exerciseButton');
var meditateButton = document.getElementById('meditateButton');
var startActivityButton = document.getElementById('startActivity');
var startTimerButton = document.getElementById('startTimer');
var logActivityButton = document.getElementById('logActivityButton');

// var currentActivity = ;
var loggedActivities = [];

////////// EVENT LISTENERS ///////////////
studyButton.addEventListener('click', onButtonClick);
meditateButton.addEventListener('click', onButtonClick);
exerciseButton.addEventListener('click', onButtonClick);
// startActivityButton.addEventListener('click', );
// startTimerButton.addEventListener('click', );
// logActivityButton.addEventListener('click', );

///////////// EVENT HANDLERS & FUNCTIONS ///////////////
function onButtonClick() {
  changeColor();
}


function changeColor(){
  if (event.target.id === "studyButton") {
    addColor(studyButton, "study-button-active");
    removeColor(meditateButton, "meditate-button-active");
    removeColor(exerciseButton, "exercise-button-active");
  }
}

function addColor(button, clickedClass){
  button.classList.add(clickedClass)
}
function removeColor(button, clickedClass){
  button.classList.remove(clickedClass)
}
