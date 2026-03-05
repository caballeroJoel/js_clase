const tema = document.querySelector("#tema");
const cont = document.querySelector("#cont");
tema.addEventListener("change", cambiarTema);

function cambiarTema() {
    if(tema.value== "claro") {
        cont.classList.remove("dark");
    } else {
        cont.classList.add("dark");
    }
}