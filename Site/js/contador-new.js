// Imágen N°1
const contadores = JSON.parse(localStorage.getItem('contadores'))
let contador1 = contadores.contador1;

// Botón OK del buttonesPopup, aumenta +1 en cada pulsación
const addVisited = () => {
    let contadores = {
        contador1: contador1++
    }

    // Graba +1 en local storage +1
    localStorage.setItem('contadores', JSON.stringify(contadores));

    console.log(JSON.parse(localStorage.getItem('contadores')));
}




// Imágen N°3
const contadores3 = JSON.parse(localStorage.getItem('contadores3'))
let contador13 = contadores3.contador13;

const addVisited3 = () => {
    let contadores3 = {
        contador13: contador13++
    }
    localStorage.setItem('contadores3', JSON.stringify(contadores3));

    console.log(JSON.parse(localStorage.getItem('contadores3')));
}



// Imágen N°5
const contadores5 = JSON.parse(localStorage.getItem('contadores5'))
let contador15 = contadores5.contador15;

const addVisited5 = () => {
    let contadores5 = {
        contador15: contador15++
    }
    localStorage.setItem('contadores5', JSON.stringify(contadores5));

    console.log(JSON.parse(localStorage.getItem('contadores5')));
}