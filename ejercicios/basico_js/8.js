const salida8 = document.getElementById('salida8');

let texto8 = '';

for (let i = 19; i >= 0; i--) {
  texto8 += ' '.repeat(i) + '*\n';
}

salida8.textContent = texto8;