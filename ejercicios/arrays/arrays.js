const practica1 = document.getElementById('practica1');
const practica2 = document.getElementById('practica2');

/* Práctica 1 */

let texto1 = '';

for (let i = 0; i < 50; i++) {
  let numeros = [];

  while (numeros.length < 6) {
    let numero = Math.floor(Math.random() * 49) + 1;

    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }

  texto1 += i + 1 + ") " + numeros.join(', ') + '\n';
}

practica1.textContent = texto1;

/* Práctica 2 */

let frecuencias = Array(10).fill(0);

for (let i = 0; i < 10000; i++) {
  let numero = Math.floor(Math.random() * 10) + 1;
  frecuencias[numero - 1]++;
}

let texto2 = 'Frecuencias\n\n';

for (let i = 0; i < frecuencias.length; i++) {
  texto2 += `Número ${i + 1}: ${frecuencias[i]}\n`;
}

practica2.textContent = texto2;

