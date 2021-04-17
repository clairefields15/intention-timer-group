var studyButton = document.querySelector('.study-button');
var studyImg = document.querySelector('#studyImage');
var studyImgActive = document.querySelector('#studyImageActive')
var meditateButton = document.querySelector('.meditate-button');
var meditateImg = document.querySelector('#meditateImage')
var meditateImgActive = document.querySelector('#meditateImageActive')
var exerciseButton = document.querySelector('.exercise-button');
var exerciseImg = document.querySelector('#exerciseImage')
var exerciseImgActive = document.querySelector('#exerciseImageActive')
var allButtons = document.querySelectorAll('.button');
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
var minCountdown = document.getElementById('minutesCountdown');
var secCountdown = document.getElementById('secondsCountdown');
var descriptionTitle = document.getElementById('descriptionTitle');

var loggedActivities = [];
var currentActivity;

////////// EVENT LISTENERS ///////////////
startActivityButton.addEventListener('click', startActivity);
startTimerButton.addEventListener('click', countdown);
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
for(var i = 0; i < allButtons.length ; i ++) {
  allButtons[i].addEventListener('click', selectCategory)
}

function selectCategory() {
  if (studyButton.checked) {
    showElement(studyImgActive);
    hideElement(studyImg)
    hideElement(meditateImgActive)
    showElement(meditateImg)
    hideElement(exerciseImgActive)
    showElement(exerciseImg)
    startTimerButton.className = 'start-button circle-outline-study';
  } else if (meditateButton.checked) {
    showElement(meditateImgActive)
    hideElement(meditateImg)
    hideElement(studyImgActive)
    showElement(studyImg)
    hideElement(exerciseImgActive)
    showElement(exerciseImg)
    startTimerButton.className = 'start-button circle-outline-meditate';
  } else if (exerciseButton.checked) {
    showElement(exerciseImgActive)
    hideElement(exerciseImg)
    hideElement(studyImgActive)
    showElement(studyImg)
    hideElement(meditateImgActive)
    showElement(meditateImg)
    startTimerButton.className = 'start-button circle-outline-exercise'
  }
}

function getCategory() {
  if (studyButton.checked) {
    return studyButton.value
  } else if (meditateButton.checked) {
    return meditateButton.value
  } else if (exerciseButton.checked) {
    return exerciseButton.value
  }
}

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
  var isChecked = false;
  for (var i = 0 ; i < allButtons.length ; i ++) {
    if(allButtons[i].checked) {
      isChecked = true;
      }
    }
  if (isChecked) {
    hideElement(categoryError);
  } else {
    showElement(categoryError);
    return true
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

function checkSeconds() {
  if(secondsInput.value < 10) {
     return `0${secondsInput.value}`;
  } else{
    return secondsInput.value
  }
}

function startActivity() {
  event.preventDefault();
  if(!checkForErrors()) {
    var category = getCategory();
    var secondsInput = checkSeconds();
    currentActivity = new Activity(category, accomplishInput.value, minutesInput.value, secondsInput);
    hideElement(activityForm);
    showElement(timerDisplay);
    activity.innerText = 'Current Activity';
    render();
  }
}

function render() {
  descriptionTitle.innerText = currentActivity.description;
  minCountdown.innerText = currentActivity.minutes;
  secCountdown.innerText = currentActivity.seconds;
}

function countdown() {
  currentActivity.startTimer();
}
