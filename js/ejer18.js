const activo = document.querySelector("#activo");
const estado = document.querySelector("#estado");

activo.addEventListener("change", alterActivo);

function alterActivo() {
    if(activo.checked) {
        estado.textContent = "Activo";
    } else {
        estado.textContent = "Inactivo";
    }
}