/*Definimos lo que usamos en HTML*/
let containerButtoms = document.querySelector(".container-numbers-stars");
let containerThanks = document.querySelector(".container-thanks");
let containerSpan = document.querySelector(".container-thanks-number");
const buttonSubmit = document.querySelector(".container-button-submit");
let container = document.querySelector(".container");
/*Tenemos un EventListener escuchando cambios de los botones*/
containerButtoms.addEventListener("click", (e) => {
  /*Seleccionamos el valor de los botones por innerText */
  let valorBoton = e.target.innerText;
  /*Reemplazamos el valor de los botones en tl HTML cambiando su estado */
  containerSpan.innerText = valorBoton;
  /*Hacemos la condicional de si los botones son de un rango 0 a 5 el boton pueda dar Submit */
  if (valorBoton > 0 || valorBoton <= 5)
    buttonSubmit.addEventListener("click", () => {
      container.style.display = "none";
      containerThanks.style.display = "flex";
    });
});
