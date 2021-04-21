<h1 align="center">⏳INTENTION TIMER⏳</h1>

Turing 2103 FE Week 4 Group Project  
## Table of Contents
* [Introduction](#introduction)
* [Links](#Links)
* [Features](#Features )
* [Future Additions](#Future-Additions)
* [Contributors](#contributors)
* [Languages](#Languages)

## Introduction
This is an interactive website where a user can set an intention to study, meditate, or exercise. Once the user has chosen their category they can then input what (specifically) they would like to accomplish during that time, and set a timer for the length of the session. Once they click the "start activity" button a timer will display and they can start the countdown whenever they would like. When the activity is complete, they can log it (which will add it to localStorage) and it will show up in the right sidebar indefinitely (or until they clear localStorage). The user can, from there, choose to do another activity-- which will take them back to the main page.
## Links  
- To view the project in action, [click here!](https://clairefields15.github.io/intention-timer-group/)
- [DTR](https://gist.github.com/clairefields15/89aee5130d8312666483b70ceb2c34f9)

## Features
* When an activity category is clicked on (Exercise, Meditate, or Study), the associated border and icon should change color. User also should see an error message if they attempt to submit the form without filling out all fields:  
![Button Colors and Error messages](https://i.imgur.com/QsfaZv0.gif)

* User can only enter numbers in minutes and seconds, and when the Start Activity button is clicked, the user no longer sees the form, and instead sees a timer clock:  
![Only can do numbers and timer view](https://i.imgur.com/xi3IdTf.gif)

* The user can start the time by clicking Start:    
![Start timer by clicking start](https://i.imgur.com/n0YOOSc.gif)

* When the user acknowledges the completion of the activity by clicking Log Activity, a card with the category, time, and the users input for What would you like to accomplish during this time? should appear on the card. The card should also have a small color-coded visual indicator of the category:    
![Activity card](https://i.imgur.com/uY4DVXj.gif)

* When the user refreshes the page, their past activities are still displayed:  
![Refresh page cards still saved](https://i.imgur.com/1k9ROwq.gif)

### Future Additions
- Animate the border around the timer in a way that communicates how much time is left.  
- After the timer begins, a user can pause the timer and resume an activity when they wish.  
- Double click to delete saved activities from local storage.
## Contributors
- [Claire Fields](https://github.com/clairefields15)  
- [Lindsay Schnell](https://github.com/lschnell8)   
- [Darla Evans](https://github.com/darlaevans2000)
**Project Manager: [Will Mitchell](https://github.com/wvmitchell)**  
**Code Reviewer: [Kristi Miller](https://github.com/Kristiannmiller)**

## Languages
JavaScript  
CSS  
HTML   
