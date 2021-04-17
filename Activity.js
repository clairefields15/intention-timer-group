class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }

//this almost works
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

  // startTimer() {
  //   var start = Date.now();
  //   var totalTime = Number(this.minutes * 60) + Number(this.seconds);
  //   var countDownTime = setInterval(function() {
  //     var remainingMinutes = Math.floor(totalTime / 60);
  //     var remainingSeconds = totalTime % 60;
  //     minCountdown.innerText = remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes;
  //     secCountdown.innerText = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
  //     totalTime--;
  //     if (totalTime.value === 0) {
  //       return alert('Time is up! Congrats!');
  //       clearInterval(countDownTime);
  //     }
  //   }, 100);
  // };
  markComplete() {
    this.completed = true;
  }

  saveToStorage(pastActivities) {
    pastActivities.push(currentCard);
    var cards = JSON.stringify(pastActivities);
    localStorage.setItem('userActivities', cards);
  }
}
