

function rollDice(){
    const numberOfDice = document.getElementById("numberOfDice").value;
    const diceImages = document.getElementById("dice-images");
    const diceResult = document.getElementById("dice-result");
    const values = [];
    const images = [];
    
    for(i = 0; i < numberOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value)
        images.push(`<img src="dice_images/${value}.png"></img>`)
    }
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}