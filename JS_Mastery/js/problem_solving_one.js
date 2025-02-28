// 12 inch 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

function inchToFeet2(inch) {
  const feet = inch / 12;
  const feetFraction = parseInt(feet);
  const feetInch = inch % 12;
  const result = feetFraction + " ft " + feetInch + " inch.";
  return result;
}

// console.log(inchToFeet2(85));

function mileToKilometer(mile) {
  const km = mile * 1.60934;
  return km;
}
function gramToKiloGram(gram) {
  const kg = gram * 0.001;
  return kg;
}

// console.log(gramToKiloGram(10000));

function leapYear(year) {
  if (year % 4 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " isn't leap year");
  }
}

function leapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " isn't leap year");
  }
}

// leapYear2(2024);

/**
 * 1. Those years which are not divisible by 100, but divisible by 4 are leap year
 */

const numbers = [1, 24, 56, 45, 12, 53, 88];

// numbers.forEach((num) => {
//   if (num % 2 === 0) {
//     console.log(num + " is a even number");
//   } else if (num % 2 === 1) {
//     console.log(num + " is a odd number");
//   }
// });

const ppl = ["abul", "dabul", "Tabul", "bulbul", "culbul", "bulbul", "culbul pande"];

const newPpl = [];
ppl.forEach((item) => {
  if (newPpl.includes(item)) {
    return;
  } else {
    newPpl.push(item);
  }
});

// console.log(ppl, ppl.length, newPpl, newPpl.length);

// const today = new Date();
// console.log(today.toLocaleString());

// const date = new Date("2025-11-18");
// console.log(date.toDateString());

// const newDate = new Date(2025, 0, 18);
// console.log(newDate.toDateString());

let x = 4;
let y = 8;

// console.log(x, y);

[x, y] = [y, x];

// console.log(x, y);


// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius){
  const fahrenheit = (celsius * 9/5) + 32;
  return console.log(fahrenheit);
}

// celsiusToFahrenheit(3);

// You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbs = [5, 6, 11, 12, 98, 5];

numbs.forEach(num => {
  // console.log(num)
})


// reverse a string

const str = "Hello Dinar, How are you??"
const newStr = str.split("").reverse().join("");
console.log("reversed string:", newStr)
