# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://github.com/Gito125/age-calculator-app/)
- Live Site URL: [Add live site URL here](https://age-calculator-app1.web.app/)

## My process

### Built with

- Tailwind css
- [React](https://reactjs.org/) - JS library

### What I learned

Calculating Dates

```js
let now = new Date();
let then = new Date(input.year.val, input.month.val - 1, input.day.val - 1);
let diff = now - then;
let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
let months = Math.abs(
  Math.floor((diff / (1000 * 60 * 60 * 24 * 365.25)) * 12) -
    Math.floor(years * 12)
);
let days =
  Math.floor(diff / (1000 * 60 * 60 * 24)) - Math.floor(years * 365.25);
```

### Continued development
--- Backend developmet

## Author

- Website - [Add your name here](https://www.iamgideon125.carrd.co)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Gito125)
