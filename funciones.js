//Variables globales    
const d = document;
let campoTexto = d.querySelector(".texto");
let botonCrear = d.querySelector(".boton");
let tabla = d.querySelector(".table tbody");

botonCrear.addEventListener("click", function(){
    crearTarea();
    // alert ("El usuario escribio: "+ campoTexto.value)
});
let contar = 1;
function crearTarea(){
    if (campoTexto.value == ""){
        alert ("Debes escribir la tarea")
        return;
    }
    let fila = d.createElement("tr");
    fila.innerHTML = `
    <td class="nuevoTexto" > ${contar++} </td>
    <td> <span> ${ campoTexto.value } </span> </td>
    <td> <span class="editarBoton"> ✍  </span> </td>
    <td> <span class="botonEliminar" onclick="eliminarTarea();"> ❌ </span> </td>
    `;
    tabla.appendChild(fila);
    campoTexto.value=""
}
function eliminarTarea(){
    let botonEliminar = d.querySelector(".botonEliminar");
    let confirmar = confirm("¿Desea eliminar esta tarea?");
    if (confirmar){
        botonEliminar.parentElement.parentElement.remove();
    }
}
campoTexto.addEventListener("keyup", function(e){
    // console.log(e.key);
    if( e.key == "Enter"){
        crearTarea();
    }
});

function editarBoton (){ 
    let editarBoton = d.querySelectorAll(".editarBoton");
    let editar = editar("¿Desea editar la tarea?")
    editarBoton.addEventListener("onclick")
    var nuevoTexto = d.querySelector ("nuevoTexto")
    editarBoton.nuevoTexto = prompt("Digite el texto nuevo")

}

    