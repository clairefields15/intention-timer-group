// study, meditate, exercise main pg
var studyButton = document.getElementById('studyButton');
var studyImg = document.getElementById('studyImage');
var studyImgActive = document.getElementById('studyImageActive');
var meditateButton = document.getElementById('meditateButton');
var meditateImg = document.getElementById('meditateImage')
var meditateImgActive = document.getElementById('meditateImageActive');
var exerciseButton = document.getElementById('exerciseButton');
var exerciseImg = document.getElementById('exerciseImage');
var exerciseImgActive = document.getElementById('exerciseImageActive');
//buttons qs
var allButtons = document.querySelectorAll('.button');
var activityButtonContainer = document.getElementById('buttonRow');
var startActivityButton = document.getElementById('startActivityButton');
var startTimerButton = document.getElementById('startButton');
var logActivityButton = document.getElementById('logActivityButton');
var createNewActivityButton = document.getElementById('createNewButton');
// inputs
var minutesInput = document.getElementById('minutes');
var secondsInput = document.getElementById('seconds');
var accomplishInput = document.getElementById('descriptionInput');
var allInputs = document.querySelectorAll('.input-form')
//errors
var minutesError = document.getElementById('minutesError');
var secondsError = document.getElementById('secondsError');
var descriptionError = document.getElementById('descriptionError');
var categoryError = document.getElementById('categoryError');
//timer, cards, etc
var minCountdown = document.getElementById('minutesCountdown');
var secCountdown = document.getElementById('secondsCountdown');
var leftSection = document.getElementById('leftSection');
var timerDisplay = document.getElementById('timerDisplay');
var activityForm = document.getElementById('activityForm');
var activity = document.getElementById('newActivity');
var descriptionTitle = document.getElementById('descriptionTitle');
var cardsContainer = document.getElementById('cardContainer');
var newActivitySection = document.getElementById('newActivitySection');
//global variables
var currentActivity;

////////// EVENT LISTENERS ///////////////
window.addEventListener('load', renderCard);
window.addEventListener('load', buttonListener);
startTimerButton.addEventListener('click', countdown);
logActivityButton.addEventListener('click', logActivity);
createNewActivityButton.addEventListener('click', goHome);
startActivityButton.addEventListener('click', function(event) {
  startActivity(event);
});

minutesInput.addEventListener("keypress", function(event) {
  if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
    event.preventDefault();
  }
});

secondsInput.addEventListener("keypress", function(event) {
  if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
    event.preventDefault();
  }
});

///////////// EVENT HANDLERS & FUNCTIONS ///////////////
function buttonListener() {
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', selectCategory)
  }
};

function selectCategory() {
  if (studyButton.checked) {
    studyButtonActive();
  } else if (meditateButton.checked) {
    meditateButtonActive();
  } else if (exerciseButton.checked) {
    exerciseButtonActive();
  }
};

function studyButtonActive() {
  showElement(studyImgActive);
  hideElement(studyImg)
  hideElement(meditateImgActive)
  showElement(meditateImg)
  hideElement(exerciseImgActive)
  showElement(exerciseImg)
  startTimerButton.className = 'start-button circle-outline-Study';
};

function meditateButtonActive() {
  showElement(meditateImgActive)
  hideElement(meditateImg)
  hideElement(studyImgActive)
  showElement(studyImg)
  hideElement(exerciseImgActive)
  showElement(exerciseImg)
  startTimerButton.className = 'start-button circle-outline-Meditate';
};

function exerciseButtonActive() {
  showElement(exerciseImgActive)
  hideElement(exerciseImg)
  hideElement(studyImgActive)
  showElement(studyImg)
  hideElement(meditateImgActive)
  showElement(meditateImg)
  startTimerButton.className = 'start-button circle-outline-Exercise'
};

function checkForErrors() {
  var hasError = false;
  if (preventButtons() || preventAccomplish() || preventMinutes() || preventSeconds() ) {
    hasError = true;
  }
  return hasError;
};

function preventButtons() {
  var isChecked = false;
  for (var i = 0; i < allButtons.length; i++) {
    if (allButtons[i].checked) {
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
  if (!minutesInput.value) {
    showElement(minutesError);
    return true;
  } else {
    hideElement(minutesError);
  }
};

function preventSeconds() {
  if (!secondsInput.value) {
    showElement(secondsError);
    return true;
  } else {
    hideElement(secondsError);
  }
};

function showElement(element) {
  element.classList.remove('hidden');
};

function hideElement(element) {
  element.classList.add('hidden');
};

function formatTime(timeInput) {
  if (timeInput === minutesInput) {
    return minCountdown.innerText = minutesInput.value < 10 ? '0' + minutesInput.value : minutesInput.value;
  } else if (timeInput === secondsInput) {
    return secCountdown.innerText = secondsInput.value < 10 ? '0' + secondsInput.value : secondsInput.value;
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
};

function startActivity(event) {
  event.preventDefault();
  if (!checkForErrors()) {
    var category = getCategory();
    var seconds = formatTime(secondsInput);
    var minutes = formatTime(minutesInput);
    currentActivity = new Activity(category, accomplishInput.value, minutes, seconds);
    hideElement(activityForm);
    showElement(timerDisplay);
    activity.innerText = 'Current Activity';
    renderTimer();
  }
};

function renderTimer() {
  descriptionTitle.innerText = currentActivity.description;
  minCountdown.innerText = currentActivity.minutes;
  secCountdown.innerText = currentActivity.seconds;
};

function goHome() {
  hideElement(newActivitySection);
  showElement(activityForm);
  startTimerButton.innerText = 'START';
  hideElement(logActivityButton);
  resetHomepage();
  document.getElementById("startButton").disabled = false;
};

function resetHomepage() {
  clearFormInputs();
  uncheckButtons();
  showImg();
  hideActiveImg();
};

function clearFormInputs() {
  for (var i = 0; i < allInputs.length; i ++){
    allInputs[i].value = '';
  }
}

function uncheckButtons() {
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].checked = false
  }
}

function showImg() {
  showElement(meditateImg);
  showElement(studyImg);
  showElement(exerciseImg);
};

function hideActiveImg() {
  hideElement(meditateImgActive);
  hideElement(studyImgActive);
  hideElement(exerciseImgActive);
};

function countdown() {
  currentActivity.startTimer();
  startTimerButton.disabled = true;
};

function showComplete() {
  startTimerButton.innerText = 'COMPLETE!';
  showElement(logActivityButton);
}

//localStorage functions
function logActivity() {
  hideElement(timerDisplay);
  showElement(newActivitySection);
  currentActivity.saveToStorage(currentActivity);
  renderCard();
};

function retrieveFromStorage() {
  var keys = [];
  for (var i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i))
  }
  var loggedActivities = [];
  for (var i = 0; i < keys.length; i++) {
    var item = localStorage.getItem(keys[i]);
    var parsedItem = JSON.parse(item);
    loggedActivities.push(parsedItem);
  }
  return loggedActivities
};

function renderCard() {
  cardsContainer.innerHTML = '';

  var loggedActivities = retrieveFromStorage();

  for (var i = 0; i < loggedActivities.length; i++) {
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
