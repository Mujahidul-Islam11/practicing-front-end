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

const ppl = ["abul", "abul", "bulbul", "culbul", "bulbul", "culbul pande"];

const newPpl = [];
ppl.forEach((item) => {
  if (newPpl.includes(item)) {
    return;
  } else {
    newPpl.push(item);
  }
});

console.log(ppl, ppl.length, newPpl, newPpl.length);
