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
    //fired when you click start button on the timer page
    //should decriments this.minutes and this.seconds
    //when timer completes, an alert should appear
  }

  markComplete() {
    this.completed = true;
  }

  saveToStorage(pastActivities) {
    pastActivities.push(currentCard);
    var cards = JSON.stringify(pastActivities);
    localStorage.setItem('userActivities', cards);
  }
}
