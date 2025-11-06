// Selectores
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');

// Crear los años
const years = document.createElement('option');
const max = new Date().getFullYear();
const min = max - 11;

for (let i = max; i > min; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector("#year").appendChild(option);
}
// Ciclo while

// Datos para la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

// Event listeners para el formulario
marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);

    filtrarAuto();
});

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);

    filtrarAuto();
});

maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);
    filtrarAuto();
});

puertas.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);

    filtrarAuto();
});
transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto();
});
color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value
    filtrarAuto();
});

function limpiarHTML() {
    const contenedor = document.querySelector('#resultado');

    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarAutos(autos) {
    limpiarHTML();

    const contenedor = document.querySelector('#resultado');

    autos.forEach(auto => {
        const autoHTML = document.createElement
            ('p');
        autoHTML.innerHTML = `
        <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmision: ${auto.transmision} - Precio ${auto.precio} - Color: ${auto.color}</p>
        
        `;
        contenedor.appendChild(autoHTML);
    })
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');

    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMaximo).filter(filtrarMinimo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.lenght) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

// APlicar los filtros

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto){
    if (datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto){
    if (datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto){
    if (datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}
function filtrarTransmision(auto){
    if (datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}
function filtrarColor(auto){
    if (datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}