const salida7 = document.getElementById('salida7');

let texto7 = '';

for (let i = 0; i < 20; i++) {
  texto7 += ' '.repeat(i) + '*\n';
}

salida7.textContent = texto7;