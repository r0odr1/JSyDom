// querySelector : retorna 0 o 1 elementos
const heading = document.querySelector(".header__texto h2");
heading.textContent = "Nuevo Heading";
console.log(heading);

// querySelectorAll : retorna de cero a todos los que concuerden con el selector
const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = 'Nuevo texto para Enlace'

// getElementById
const heading2 = document.getElementById('heading');