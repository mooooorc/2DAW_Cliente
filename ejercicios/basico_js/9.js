const salida9 = document.getElementById('salida9');

let texto9 = '';

for (let i = 20; i >= 1; i--) {
  texto9 += '* '.repeat(i) + '\n';
}

salida9.textContent = texto9;