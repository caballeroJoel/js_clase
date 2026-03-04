const campo = document.querySelector("#camp");
const btn10 = document.querySelector("#btn10").addEventListener("click", cambioTextoJS);

function cambioTextoJS() { 
    campo.value = "Texto introducido con JS"
}