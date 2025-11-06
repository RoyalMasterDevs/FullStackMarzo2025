// Funcion. Instruccion dentro de un programa, parte del programa, que hace algo en especifico.

function MiFuncion(p1, p2) {
    return p1 * p2;
}

let resultado = MiFuncion(10, 10);

// console.log(resultado)

document.getElementById("demo").innerHTML = "El resultado es: " + resultado;

function aCelcius(f){
    return (5/9) * (f-32);
}

let valor = aCelcius(77);
document.getElementById("celcius").innerHTML = valor + " Celcius";

