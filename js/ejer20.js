const btnForm = document.querySelector("#btnForm20").addEventListener("click", enviarForm);

function enviarForm() {
    const name = document.querySelector("#name20");
    const ciudad = document.querySelector("#ciudad20");
    const accep = document.querySelector("#accep");
    
    const curr = document.querySelector("#curr");

    let sino;

    curr.innerHTML = '';

    if(accep.checked) {
        sino = "Si";
    } else {
        sino = "No";
    }

    curr.innerHTML += `
        <p>`+name.value+`</p>
        <p>`+ciudad.value+`</p>
        <p>`+sino+`</p>
    `;

    
}