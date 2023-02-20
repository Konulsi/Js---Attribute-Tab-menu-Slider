"use strict";


let clickBtn = document.querySelector(".click-btn button");

let modals = document.querySelector(".hide-modals");

let icon = document.querySelector(".modals .tittle i")

let closeBtn = document.querySelector(".buttons .closeBtn")

clickBtn.addEventListener("click", function(){
    modals.classList.remove("hide-modals");
    document.getElementById("overlay").style.display = "block"
})

icon.addEventListener("click", hideModal)

closeBtn.addEventListener("click",hideModal)


function hideModal(){
    modals.classList.add("hide-modals");
    document.getElementById("overlay").style.display = "none"
}