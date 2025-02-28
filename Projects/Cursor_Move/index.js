const main = document.querySelector("#main");
const crsr = document.querySelector("#cursor");

main.addEventListener("mouseover", (dts)=>{
    crsr.style.left = dts.x+"px";
    crsr.style.top = dts.y+"px"
})