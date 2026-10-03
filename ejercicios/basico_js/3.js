const salida3 = document.getElementById('salida3');


/**
 * Con var fuera y let dentro:
 * Dentro del if: Adiós
 * Fuera del if: Hola
 * 
 * No son iguales porque let tiene scope.
 */

var mensaje = 'Hola';

if (true) {
  let mensaje = 'Adiós';
  console.log(mensaje);
}

console.log(mensaje);


/**
 * Con let fuera y dentro:
 * Dentro del if: Adiós
 * Fuera del if: Hola
 * 
 * Let tiene scope de bloque
 */


let mensajeLet = 'Hola';

if (true) {
  let mensajeLet = 'Adiós';
  console.log(mensajeLet);
}

console.log(mensajeLet);

/**
 * Con var dentro y fuera:
 * Dentro del if: Adiós
 * Fuera del if: Adiós
 * 
 * var no tiene scope de bloque
 */


var mensajeVar = 'Hola';

if (true) {
  var mensajeVar = 'Adiós';
  console.log(mensajeVar);
}

console.log(mensajeVar);


salida3.textContent = `var fuera + let dentro:
Dentro: Adiós
Fuera: Hola

let fuera + let dentro:
Dentro: Adiós
Fuera: Hola

var fuera + var dentro:
Dentro: Adiós
Fuera: Adiós`;