const $capa1 = document.querySelector("#capa1");
const $capa2 = document.querySelector("#capa2");
const $reset_btn = document.querySelector("#btn-reset")

$capa1.addEventListener("dragstart", () => {
  $capa1.style.opacity = "0.3";
});

$capa1.addEventListener("dragend", () => {
  $capa1.style.opacity = "1";
});

$capa2.addEventListener("dragenter", () => {
  $capa2.style.backgroundColor = "red";
});

$capa2.addEventListener("dragleave", () => {
  $capa2.style.backgroundColor = "white";
});

$capa2.addEventListener("dragover", (event) => {
  event.preventDefault();
});

$capa2.addEventListener("drop", () => {
  $capa1.style.display = "none";
  $capa2.textContent = "¡Lo has logrado!";
  $capa2.style.backgroundColor = "white";
  $reset_btn.hidden = false;
});

const reset = () => {
  $capa1.style.display = "block";
  $capa1.style.opacity = "1";
  $capa1.style.border = "1px solid black";

  $capa2.textContent = "Soy el destino";
  $capa2.style.backgroundColor = "white";

  $reset_btn.hidden = true;
};

$reset_btn.addEventListener("click", reset);