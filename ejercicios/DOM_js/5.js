const log = document.getElementById("log");

/* --- 5.1 --- */

// Buscamos todos los elementos span que tienen la clase "precio"
const precios = document.querySelectorAll("#productos .precio");

// Escribimos en #log cuántos precios hemos encontrado
log.textContent = `Hay ${precios.length} precios listados`;


/* --- 5.2 --- */

// Buscamos el primer producto
const p1 = document.getElementById("p1");

// Mostramos su innerHTML y su textContent en dos líneas

log.innerHTML += `
  <br>
  innerHTML: ${p1.innerHTML}
  <br>
  textContent: ${p1.textContent}
`;

// innerHTML devuelve el HTML, incluidas las etiquetas.
// textcContent solo devuelve el texto.

/* --- 5.3 --- */

// Buscamos el párrafo con id "n2"
const n2 = document.getElementById("n2");

// Cambiamos su contenido
n2.textContent = "Reposición completada. ¡Gracias por vuestra paciencia!";

/* --- 5.4 --- */

// Recorremos todos los precios
precios.forEach((precio) => {
  // Sumamos 0.10 al precio actual
  precio.textContent = Number(precio.textContent) + 0.1;
});

/* --- 5.5 --- */

// Buscamos la lista de productos
const lista = document.getElementById("lista");

// Creamos un nuevo elemento li
const tila = document.createElement("li");

// Le damos el contenido
tila.innerHTML = 'Tila <span class="precio">2.20</span> €';

// Añadimos el nuevo producto al final de la lista
lista.appendChild(tila);

/* --- 5.6 --- */

// Creamos el nuevo elemento
const productoDestacado = document.createElement("li");

// Le damos contenido
productoDestacado.innerHTML = 'Producto destacado <span class="precio">9.99</span> €';

// Sustituimos el primer elemento de la lista
lista.replaceChild(productoDestacado, lista.firstElementChild);

/* --- 5.7 --- */

// Eliminamos el párrafo. No lo busco porque ya se guardó en una const en el 5.3
n2.remove();

/* --- 5.8 --- */

// Buscamos todos los inputs cuyo name sea "alumnos"
const alumnos = document.querySelectorAll('input[name="alumnos"]');

// Marcamos todos los checkboxes
alumnos.forEach((alumno) => {
  alumno.checked = true;
});

/* --- 5.9 --- */

// Añadimos al log el número total de elementos de la lista
log.innerHTML += `<br>Total de productos: ${lista.children.length}`;