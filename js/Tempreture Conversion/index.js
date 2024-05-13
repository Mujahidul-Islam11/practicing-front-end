const inputBox = document.getElementById('inputBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const Result = document.getElementById('Result');
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(inputBox.value);
        temp = temp * 9 / 5 + 32;
        Result.textContent = temp + '°F'
    }
    else if(toCelsius.checked){
        temp = Number(inputBox.value);
        temp = ( temp - 32 ) * (5/9);
        Result.textContent = temp + '°c'
    }
    else{
        Result.textContent = "Select a unit"
    }
}