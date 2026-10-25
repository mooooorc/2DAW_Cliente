export const pedirPalabras = () => {

    const palabras = []

    while(true){
        const palabra = prompt("Introduce una palabra:")

        if(palabra === null || palabra === "") break

        palabras.push(palabra)
    } 

    return palabras
}
