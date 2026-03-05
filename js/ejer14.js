const btnMail = document.querySelector("#btnMail").addEventListener("click", claseError);
const email = document.querySelector("#mail");

function claseError() {
    if(email.value.trim()) {
        email.classList.remove("error");
    } else {
        email.classList.add("error");
    }
}