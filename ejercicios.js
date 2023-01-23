// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// let p = 55

// function contar(parametro){
//     switch (typeof(parametro)) {
//         case "string":
//             console.log(parametro.length);
//             break;
//         case "number":
//             console.log(parametro.toString().length);
//             break;
    
//         default:
//             console.log("error");
//             break;
//     }
// }
// contar(589)

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// function cortar(texto,corte){
//     console.log(texto.substring(0,corte));
// }
// cortar("Hola Mundo", 4)

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// function separar(texto,separador){
//     console.log(texto.split(separador));
// }
// separar('hola que tal', ' ')

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetir(texto,i){
    console.log(texto.repeat(`${i} `));
}

repetir('Hola Mundo', 3)