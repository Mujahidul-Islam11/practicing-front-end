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

function mileToKilometer(mile){
    const km = mile * 1.60934;
    return km;
}

console.log(mileToKilometer(32));
