// querySelector : retorna 0 o 1 elementos
const heading = document.querySelector(".header__texto h2");
heading.textContent = "Nuevo Heading";
console.log(heading);

// querySelectorAll : retorna de cero a todos los que concuerden con el selector
const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "Nuevo texto para Enlace";
enlaces[0].classList.add("nueva-clase");

// getElementById
//const heading2 = document.getElementById('heading');

//Generar un nuevo enlace : se debe colocar en mayusculas para lo que se cree
const nuevoEnlace = document.createElement("A");

// Agregar ek href
nuevoEnlace.href = "nuevo-enlace.html";

// Agregar el
nuevoEnlace.textContent = "Tienda Virtual";

// Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

// Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos

console.log(1);

window.addEventListener("load", function () {
  // load espera a que el JS y los archivos que dependen del HTML esten listos
  console.log(2);
});

window.onload = function () {
  console.log(3);
};

document.addEventListener("DOMContentLoaded", function () {
  // Solo espera por el HTML, pero no espera CSS o imagenes
  console.log(4);
});

console.log(5);

window.onscroll = function() {
  console.log("scrolling...");
};

// Seleccionar elemntos y asociales un evento
const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", function (evento) {
  console.log(evento);
  evento.preventDefault();

  // Validar un formulario


  console.log("enviando formulario");
});
