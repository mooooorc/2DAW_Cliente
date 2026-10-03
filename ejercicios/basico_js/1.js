const salida1 = document.getElementById('salida1');

var nombreVar = 'Juan';
let nombreLet = 'Pedro';
const nombreConst = 'Ana';

let texto1 = `Valores iniciales:
var: ${nombreVar}
let: ${nombreLet}
const: ${nombreConst}
`;

nombreVar = 'Carlos';
nombreLet = 'Luis';

// const no se puede reasignar
// nombreConst = 'Marta';

texto1 += `Valores después de reasignar:
var: ${nombreVar}
let: ${nombreLet}
const: ${nombreConst}`;

salida1.textContent = texto1;