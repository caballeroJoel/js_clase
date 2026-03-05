const btnBien = document.querySelector("#btnBien").addEventListener("click", bienvenida);
const nom16 = document.querySelector("#nom16");
const bien = document.querySelector("#bien");

function bienvenida() {
    if(nom16.value.trim()) {
        bien.innerHTML = "Hola "+nom16.value+"!";
    } else {
        bien.innerHTML = "Escribe tu nombre...";
    }
}