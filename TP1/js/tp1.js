let numero = Math.floor(Math.random() * (11 - 1) + 1)

function comenzar() {
    let botonComenzar = document.querySelector(`#botonComenzar`);
    botonComenzar.className = `btn btn-primary disabled`;
    console.log(numero)
}


function resultado() {
    let intento = document.querySelector("#intento").value;
    if (intento == numero) {
        alert("buena");
    } else if (intento <= numero) {
        alert("muy abajo");
    } else {
        alert("muy arriba");
    }
}