
const c1 = document.querySelector("#caso-1")
const c2 = document.querySelector("#caso-2")
const c3 = document.querySelector("#caso-3")

const filtro = (array, callback) => {

    for(let i = 0; i < array.length; i++) array[i] = callback(array[i])
    return array
}


// Caso 1: multiplicar por 2

const numeros = [1, 2, 3, 4];

filtro(numeros, numero => numero * 2);

c1.textContent += `[${numeros.join(", ")}]`

// Caso 2: pasar palabras a mayúsculas

const palabras = ["hola", "javascript", "funciones"];

filtro(palabras, palabra => palabra.toUpperCase());

c2.textContent += `[${palabras.join(", ")}]`

// Caso 3: calcular factoriales

const valores = [1, 3, 4, 5];

filtro(valores, numero => {
    let factorial = 1;

    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }

    return factorial;
});

c3.textContent += `[${valores.join(", ")}]`
