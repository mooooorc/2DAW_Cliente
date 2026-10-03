const salida4 = document.getElementById('salida4');

let nota = 8;
let resultado;

if (nota >= 9) {
  resultado = 'Sobresaliente';
} else if (nota >= 7) {
  resultado = 'Notable';
} else if (nota >= 5) {
  resultado = 'Aprobado';
} else {
  resultado = 'Suspenso';
}

let texto4 = `Nota: ${nota}
Calificación: ${resultado}`;

if (nota >= 9) {
  texto4 += '\nFelicidades';
}

salida4.textContent = texto4;