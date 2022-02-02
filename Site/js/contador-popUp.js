// Funcion selectora
const $ = id => document.getElementById(id);

// Imágen N°1

// n° Contador en el html capturado
const showVisited = $('showVisited');


// Botón adosado a las imagenes impares que abre popup
const openpopUp = () => {

    window.open("popUp.html", "", "width=800,height=400");
}

// Intervalo que busca en local storage cada tanto tiempo el dato que está dentro de 'contadores'
setInterval(() => {
    let contadores = JSON.parse(localStorage.getItem('contadores'));
    console.log(contadores.N1);
    showVisited.innerHTML = contadores.N1;
}, 1000);



// Imágen N°3

// n° Contador en el html capturado
const showVisitedN3 = $('showVisitedN3');


// Botón adosado a las imagenes impares que abre popup
const openpopUpN3 = () => {

    window.open("popUp3.html", "", "width=800,height=400");
}

// Intervalo que busca en local storage cada tanto tiempo el dato que está dentro de 'contadores'
setInterval(() => {
    let contadores = JSON.parse(localStorage.getItem('contadores'));
    console.log(contadores.N3);
    showVisitedN3.innerHTML = contadores.N3;
}, 1000);



// Imágen N°5

// n° Contador en el html capturado
const showVisitedN5 = $('showVisitedN5');


// Botón adosado a las imagenes impares que abre popup
const openpopUpN5 = () => {

    window.open("popUp5.html", "", "width=800,height=400");
}

// Intervalo que busca en local storage cada tanto tiempo el dato que está dentro de 'contadores'
setInterval(() => {
    let contadores = JSON.parse(localStorage.getItem('contadores'));
    console.log(contadores.N5);
    showVisitedN5.innerHTML = contadores.N5;
}, 1000);