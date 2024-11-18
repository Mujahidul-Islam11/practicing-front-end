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
    console.log(year + " is a leap year")
  }else{
    console.log(year + " isn't leap year")
  }
}

leapYear(2024);