const pokemon = document.querySelector('#pokemon');
const audio = new Audio("");

const revolutions = [
    {src: "./assets/Charmeleon.png", sound: "./assets/charmeleon.mp3", alt: "Charmeleon"},
    {src: "./assets/Charizard.png", sound: "./assets/charizards-roar-audiotrimmer.mp3", alt: "Charizard"},
]

let currentIndex = -1;
pokemon.addEventListener("click", ()=>{
currentIndex = currentIndex + 1;

if(currentIndex === revolutions.length){
pokemon.src = "./assets/Charmander.png";
audio.src = "./assets/charmander.mp3";
audio.play();
currentIndex = -1;
}else{
    pokemon.src = revolutions[currentIndex].src;
    audio.src = revolutions[currentIndex].sound;
    audio.play();
}

})