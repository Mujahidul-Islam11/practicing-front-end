const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const modal = document.querySelector(".modal")

openModal.addEventListener("click", function(){
    modal.style.visibility = "inherit"
})
closeModal.addEventListener("click", function(){
    modal.style.visibility = "hidden"
})
