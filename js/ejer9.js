const entr = document.querySelector("#entrada");
entr.addEventListener("change", cambioTexto);

function cambioTexto() { 
    const sal = document.querySelector("#salida");
    sal.textContent = entr.value;
}