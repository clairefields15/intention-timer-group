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
var cardsContainer = document.getElementById('cardContainer');
var newActivitySection = document.getElementById('newActivitySection')
var createNewActivityButton = document.getElementById('createNewButton');

var loggedActivities = [];
var currentActivity;

////////// EVENT LISTENERS ///////////////
startActivityButton.addEventListener('click', startActivity);
startTimerButton.addEventListener('click', countdown);
logActivityButton.addEventListener('click', logActivity);
createNewActivityButton.addEventListener('click', goHome);
window.addEventListener('load', renderCard);

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
    startTimerButton.className = 'start-button circle-outline-Study';
  } else if (meditateButton.checked) {
    showElement(meditateImgActive)
    hideElement(meditateImg)
    hideElement(studyImgActive)
    showElement(studyImg)
    hideElement(exerciseImgActive)
    showElement(exerciseImg)
    startTimerButton.className = 'start-button circle-outline-Meditate';
  } else if (exerciseButton.checked) {
    showElement(exerciseImgActive)
    hideElement(exerciseImg)
    hideElement(studyImgActive)
    showElement(studyImg)
    hideElement(meditateImgActive)
    showElement(meditateImg)
    startTimerButton.className = 'start-button circle-outline-Exercise'
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
    renderTimer();
  }
}

function renderTimer() {
  descriptionTitle.innerText = currentActivity.description;
  minCountdown.innerText = currentActivity.minutes;
  secCountdown.innerText = currentActivity.seconds;
}

function goHome() {
  hideElement(newActivitySection);
  showElement(activityForm);
  startTimerButton.innerText = 'START';
  hideElement(logActivityButton);
  clearFormFields();
  document.getElementById("startButton").disabled = false;
};

function clearFormFields() {
  accomplishInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
  studyButton.checked = false;
  meditateButton.checked = false;
  exerciseButton.checked = false;
  showElement(meditateImg);
  showElement(studyImg);
  showElement(exerciseImg);
  hideElement(meditateImgActive);
  hideElement(studyImgActive);
  hideElement(exerciseImgActive);
}

function countdown() {
  currentActivity.startTimer();
  document.getElementById("startButton").disabled = true;
}

function showComplete(){
  startTimerButton.innerText = 'COMPLETE!';
  showElement(logActivityButton);
}

function logActivity() {
  addToLoggedActivities();
  hideElement(timerDisplay);
  showElement(newActivitySection);
  currentActivity.saveToStorage(currentActivity);
  renderCard();
}

function addToLoggedActivities() {
  if(!loggedActivities.includes(currentActivity)) {
    currentActivity.markComplete();
    loggedActivities.push(currentActivity);
  }
}

function retrieveFromStorage() {
  var keys = [];
  for (var i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i))
  }
  var loggedActivities = [];
  for(var i = 0; i < keys.length; i++) {
    var item = localStorage.getItem(keys[i]);
    var parsedItem = JSON.parse(item);
    loggedActivities.push(parsedItem);
  }
  return loggedActivities
}


function renderCard() {
  cardsContainer.innerHTML = '';

  var loggedActivities = retrieveFromStorage();

  for (var i = 0; i < loggedActivities.length; i ++) {
    cardsContainer.innerHTML += `
    <section class="card-flexbox">
      <div class="log-activity-card">
        <p class="selected-type">${loggedActivities[i].category}</p>
        <p class="selected-time">${loggedActivities[i].minutes} MIN ${loggedActivities[i].seconds} SECONDS</p>
        <p class="selected-activity">${loggedActivities[i].description}</p>
      </div>
      <div class="card-line">
        <p class="circle-outline-${loggedActivities[i].category} card-line"></p>
      </div>
    </section>
    `;
  }
};
