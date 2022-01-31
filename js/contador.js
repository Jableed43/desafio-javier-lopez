// Contadores inicializados
let contador2 = 0;
let contador4 = 0;

// Botones
const boton2 = document.querySelector('.boton-2');
const boton4 = document.querySelector('.boton-4');

// Contador numerico in page
const valor2 = document.querySelector("#valor-2");
const valor4 = document.querySelector("#valor-4");


// Función de contador 2
    boton2.addEventListener ('click', function(e) {
        const estilos = e.currentTarget.classList;


        if(estilos.contains('aumentar-2')) {
            contador2++;
        }

        valor2.textContent = contador2;
    })

// Función de contador 4
    boton4.addEventListener ('click', function(e) {
        const estilos = e.currentTarget.classList;


        if(estilos.contains('aumentar-4')) {
            contador4++;
        }

        valor4.textContent = contador4;
    })