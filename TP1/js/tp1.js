function comenzar() {
    let botonComenzar = document.querySelector(`#botonComenzar`);
    let numeroMagico = Math.floor(Math.random() * (11 - 1) + 1);
    botonComenzar.className = `btn btn-primary disabled`;
    console.log(numeroMagico);
    return numeroMagico;

}


function resultado() {
    let intento = document.querySelector("#intento").value;
    if (intento == comenzar()) {
        alert("buena");
    }else if(intento <= comenzar()){
        alert("muy abajo");
    }else{
        alert("muy arriba");
    }
}