
import { pedirPalabras } from "../main.js"

/* Práctica 2 */

const pr2 = document.querySelector("#pr-2")


const contarPalabras = (palabras) => {
    const resultado = new Map();

    palabras.forEach(palabra => {
        if (resultado.has(palabra)) {
            resultado.set(palabra, resultado.get(palabra) + 1);
        } else {
            resultado.set(palabra, 1);
        }
    });

    return resultado;
}

const palabras = pedirPalabras();
const resultado = contarPalabras(palabras);

resultado.forEach((cantidad, palabra) => {
    pr2.innerHTML += `${palabra}: ${cantidad}<br>`;
});
