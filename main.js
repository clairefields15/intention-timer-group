
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
var input = document.querySelector('.form-input')
var error = document.querySelector('.error-message')

// var currentActivity = ;
var loggedActivities = [];

////////// EVENT LISTENERS ///////////////
// studyButton.addEventListener('click', onButtonClick);
// meditateButton.addEventListener('click', onButtonClick);
// exerciseButton.addEventListener('click', onButtonClick);
startActivityButton.addEventListener('click', startActivity);
// startActivityButton.addEventListener('click', );
// startTimerButton.addEventListener('click', );
// logActivityButton.addEventListener('click', );

///////////// EVENT HANDLERS & FUNCTIONS ///////////////

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





// function onButtonClick() {
//   changeColor();
// }
//
//
// function changeColor(){
//   if (event.target.id === "studyButton") {
//     addColor(studyButton, "study-button-active");
//     removeColor(meditateButton, "meditate-button-active");
//     removeColor(exerciseButton, "exercise-button-active");
//   }
// }
//
// function addColor(button, clickedClass){
//   button.classList.add(clickedClass)
// }
// function removeColor(button, clickedClass){
//   button.classList.remove(clickedClass)
// }
