const btnEsc = document.querySelector("#btnEsc").addEventListener("click", classEsconder);
const panell = document.querySelector("#panell");

function classEsconder() {
    panell.classList.add("amagat");
}