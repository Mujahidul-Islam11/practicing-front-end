const watch = document.querySelector("#watch");
const activate = new Audio();
const aliens = [
  { src: "./assets/alien-1.png", sound: "./assets/omnitrix-activated.mp3", alt: "alien-1" },
  { src: "./assets/alien-2.png", sound: "./assets/changed-alien.mp3", alt: "alien-2" },
  { src: "./assets/alien-3.png", sound: "./assets/changed-alien.mp3", alt: "alien-3" },
  { src: "./assets/alien-4.png", sound: "./assets/changed-alien.mp3", alt: "alien-4" },
  { src: "./assets/alien-5.png", sound: "./assets/changed-alien.mp3", alt: "alien-5" },
  { src: "./assets/alien-6.png", sound: "./assets/changed-alien.mp3", alt: "alien-6" },
];

let currentIndex = -1; 

watch.addEventListener("click", () => {
  currentIndex = currentIndex + 1;
  if (currentIndex === aliens.length) {
    watch.src = "./assets/watch.png";
    watch.alt = "watch";
    currentIndex = -1;
  } else {
    watch.src = aliens[currentIndex].src;
    watch.alt = aliens[currentIndex].alt;
    activate.src = aliens[currentIndex].sound;
    activate.play();
  }
});
