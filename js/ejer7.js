const pBtn = document.querySelector("#missatge");
pBtn.addEventListener("click", mensajeTexto);

function mensajeTexto () {
    pBtn.textContent = "Has hecho click!";
}
