//Cambio var por const y coloco bien el identificador ya que no hay nada que se llame asi

const formulario = document.querySelector("#formulario");

formulario.onsubmit = function(e) {

  //Se debe añadir Default para prevenir el funcionamiento por defecto
  e.preventDefault();

  //corrijo var para mejorar funcionamiento y traigo elementos, no indices
  const n = formulario.elements.name;
  const e = formulario.elements.age;
  const na = formulario.elements.nacionality;


//Añado .trim, lipia espacios en blanoc
  const nombre = n.value.trim();
// Números
  const edad = parseInt(e.value, 10);
//Trae nacionalidad
  const nacionalidad = na.value;

  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")

  //es un bloque if-else para marcar el error
  }else
  n.classList.remove("error");
  }


// Si los datos son válidos, se agrega el invitado
  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  };

const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }


  const lista = document.getElementById("lista-de-invitados")

  const elementoLista = document.createElement("div")

  //es solo .add
elementoLista.classList.add("elemento-lista")
//lista.appendChild(elementoLista)


//Creo elementos para crear y agregar elementos
function crearElemento(descripcion, valor) {
  const span = document.createElement("span");
  const input = document.createElement("input");
  const espacio = document.createElement("br");




  
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)


function crearElemento(descripcion, valor) {
  const spanNombre = document.createElement("span")
  const inputNombre = document.createElement("input")
  const espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}