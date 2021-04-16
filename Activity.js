class Activity {
  constructor(category, description, minutes, id) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }

  startTimer() {
    console.log('timer started!')
    //fired when you click start activity button
    //if all inputs are good, begin countdown
    //should decriments this.minutes and this.seconds
    //the user should see the timer decrimenting
    //when timer completes, an alert should appear
    //we'll have to do this inner html once we get to this part
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
