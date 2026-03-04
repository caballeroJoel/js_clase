const divBtn = document.querySelector("#zona");
divBtn.addEventListener("click", canvioDiv);

function canvioDiv () {
    divBtn.innerHTML = "<strong>Nuevo contenido</strong>";
}
