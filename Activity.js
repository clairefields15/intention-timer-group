 class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }

  startTimer() {
    var totalTime = Number(this.minutes * 60) + Number(this.seconds);
    var countDownTime = setInterval(function() {
      var remainingMinutes = Math.floor(totalTime / 60);
      var remainingSeconds = totalTime % 60;
      minCountdown.innerText = remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes;
      secCountdown.innerText = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
      totalTime--;
      if (totalTime < 0) {
        clearInterval(countDownTime);
        showComplete();
      }
    }, 1000);
  };

  markComplete() {
    this.completed = true;
  }

  saveToStorage() {
    // loggedActivities.push(currentCard);
    // var cards = JSON.stringify(loggedActivities);
    localStorage.setItem(JSON.stringify(this.id), JSON.stringify(this));
  }
}
