class Activity {
  constructor(category, description, minutes, seconds, isCompleted) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = isCompleted;
    this.id = Date.now();
  }
}
