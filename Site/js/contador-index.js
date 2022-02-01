// Imágen N°1

const $ = id => document.getElementById(id);

// n° Contador en el html capturado
const showVisited = $('showVisited');

!localStorage.getItem('contadores') && localStorage.setItem('contadores', JSON.stringify({
    contador1: 0
}));

// Botón adosado a las imagenes impares que abre popup
const openpopUp = () => {

    window.open("popUp.html", "", "width=800,height=400");
}

// Intervalo que busca en local storage cada tanto tiempo el dato que está dentro de 'contadores'
setInterval(() => {
    const contadores = JSON.parse(localStorage.getItem('contadores'));
    console.log(contadores.contador1);
    showVisited.innerHTML = contadores.contador1;
}, 1000);


// Imágen N°3

const showVisited3 = $('showVisited3');

!localStorage.getItem('contadores3') && localStorage.setItem('contadores3', JSON.stringify({
    contador13: 0
}));


const openpopUp3 = () => { 

    window.open("popUp3.html", "", "width=800,height=400");
}

setInterval(() => {
    const contadores3 = JSON.parse(localStorage.getItem('contadores3'));
    console.log(contadores3.contador13);
    showVisited3.innerHTML = contadores3.contador13;

}, 1000);

// Imágen N°5

const showVisited5 = $('showVisited5');

!localStorage.getItem('contadores5') && localStorage.setItem('contadores5', JSON.stringify({
    contador15: 0
}));


const openpopUp5 = () => {

    window.open("popUp5.html", "", "width=800,height=400");
}

setInterval(() => {
    const contadores5 = JSON.parse(localStorage.getItem('contadores5'));
    console.log(contadores5.contador15);
    showVisited5.innerHTML = contadores5.contador15;

}, 1000);