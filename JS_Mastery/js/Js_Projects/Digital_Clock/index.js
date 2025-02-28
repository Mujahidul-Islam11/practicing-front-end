const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

const updateClock = () =>{
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am_pm = "AM";

if(h > 12){
    h = h-12;
    am_pm = "PM"
}

h = h<10 ? "0" + h : h;

hourEl.innerHTML = h;
minuteEl.innerHTML = m;
secondEl.innerHTML = s;

setTimeout(() => {
    updateClock()
}, 1000);
}

updateClock();