const btnRed = document.querySelector("#btnRed").addEventListener("click", cambioRed);

function cambioRed() {
    const texto = document.querySelector("#paragrafo").classList.toggle("red");
}