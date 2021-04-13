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
    //fired when you click start activity button
    //check all 4 inputs, if any are missing, throw an error message
    //if all inputs are good, begin countdown
    //should decriments this.minutes and this.seconds
    //the user should see the timer decrimenting
    //when timer completes, an alert should appear
  }

  markComplete() {
    //fired when a user acknowledges completion by clicking log Activity
    //change the data model!
    //change this.completed to true
    //a card is created with category, time, and user input for what would you like to accomplish during this time
    //card should appear under past activities
  }

  saveToStorage() {
    //save to localStorage
    //use JSON to convert to string
    //setItem in localStorage
  }
}
