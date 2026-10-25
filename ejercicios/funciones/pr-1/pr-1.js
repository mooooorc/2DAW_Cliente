

import { pedirPalabras } from "../main.js"


/* Práctica 1 */

const pr1 = document.querySelector('#pr-1')

const eliminarRepetidas = (palabras) =>  [...new Set(palabras)]
const ordenarPalabras = (palabras) => palabras.sort((a, b) => b.localeCompare(a, "es"))
const mostrarPalabras = (palabras) => pr1.innerHTML = palabras.join("<br>")

const palabras = pedirPalabras()
const sinRepetir = eliminarRepetidas(palabras)
const ordenadas = ordenarPalabras(sinRepetir)

mostrarPalabras(ordenadas)


