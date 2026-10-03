const salida5 = document.getElementById('salida5');

let total = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 4 === 0) {
    total += i;
  }
}

salida5.textContent = total;