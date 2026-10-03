const salida10 = document.getElementById('salida10');

let texto10 = '';

for (let i = 1; i <= 20; i++) {
  texto10 += '* '.repeat(i) + '\n';
}

salida10.textContent = texto10;