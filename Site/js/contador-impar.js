// Inicializa contador en variable, con cada propiedad, el numero detras de N significa la imágen a la que pertenece
var contador = {
    N1 : 0,
    N3 : 0,
    N5 : 0
  }

// Si no existe contadores lo crea e introduce la variable contador
if(!localStorage.getItem('contadores')) {
    localStorage.setItem('contadores', JSON.stringify(contador))
}

// Imágen N°1



// Botón OK del buttonesPopup, aumenta +1 en cada pulsación
const addVisited = () => {

    let contadores = JSON.parse(localStorage.getItem('contadores'))
    contadores.N1 = contadores.N1 + 1
    

    // Graba +1 en local storage +1
    localStorage.setItem('contadores', JSON.stringify(contadores));

    console.log(JSON.parse(localStorage.getItem('contadores')));

}



// Imágen N°3


// Botón OK del buttonesPopup, aumenta +1 en cada pulsación
const addVisitedN3 = () => {

    let contadores = JSON.parse(localStorage.getItem('contadores'))
    contadores.N3 = contadores.N3 + 1


    // Graba +1 en local storage +1
    localStorage.setItem('contadores', JSON.stringify(contadores));
    console.log(JSON.parse(localStorage.getItem('contadores')));
}


// Imágen N°5


// Botón OK del buttonesPopup, aumenta +1 en cada pulsación
const addVisitedN5 = () => {

    let contadores = JSON.parse(localStorage.getItem('contadores'))
    contadores.N5 = contadores.N5 + 1


    // Graba +1 en local storage +1
    localStorage.setItem('contadores', JSON.stringify(contadores));
    console.log(JSON.parse(localStorage.getItem('contadores')));

}