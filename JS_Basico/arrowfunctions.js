MiFuncion = (a, b) => a * b;

let resultado = MiFuncion(4, 5);

document.getElementById("demo").innerHTML = "El producto es " + resultado


Funcion2 = (a, b) => {
    a * b
    let resultado2 = Funcion2(5, 6);

}
document.getElementById("demo2").innerHTML = "Usando funcion flecha: " + resultado2


let hola = () =>{
    return "Hola mundo";
}

document.getElementById("demo3").innerHTML = hola();