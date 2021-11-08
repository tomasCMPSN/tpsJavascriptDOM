function agregarTarea() {
    let lista = document.querySelector(`#lista`);
    let tareaValue = document.querySelector(`#tarea`).value;
    lista.innerHTML += `<div class="my-3 borderAzul p-2">
    <p>${tareaValue}</p>
    <button class="btn btn-success">Completar</button>
    <button class="btn btn-danger" onclick="borrarTarea()">Borrar</button>
  </div>`
}

function borrarTarea() {
    
}