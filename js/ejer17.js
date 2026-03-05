const btnAna = document.querySelector("#btnAna").addEventListener("click", newLista);
const nom17 = document.querySelector("#nom17");
const lista = document.querySelector("#lista");

function newLista() {
    if(nom17.value.trim()) {
        lista.innerHTML+= "<li>"+nom17.value+"</li>"
    }
}