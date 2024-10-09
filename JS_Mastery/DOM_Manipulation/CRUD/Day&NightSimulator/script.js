const mode = document.querySelector("#mode");
const btn = document.querySelector("#btn");
const audio = new Audio("");


btn.addEventListener("click", () => {
  if (mode.getAttribute("alt") === "day") {
    mode.src = "./assets/night.mp4";
    audio.src = "./assets/nightmare_H5uS8oS (12).mp3";
    mode.setAttribute("alt", "night")
    btn.textContent = "Day"

    mode.load();
    mode.play();
    audio.play();

  }else{
    mode.src = "./assets/day.mp4";
    audio.src = "./assets/bird-chirping-sound-effect.mp3";
    mode.setAttribute("alt", "day")
    btn.textContent = "Night"

    mode.load();
    mode.play();
    audio.play();
  }
});
