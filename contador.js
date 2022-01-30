let contador = 0;

const valor = document.querySelector("#valor");
const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
    boton.addEventListener ('click', function(e) {
        const estilos = e.currentTarget.classList;


        if(estilos.contains('aumentar')) {
            contador++;
        }

        valor.textContent = contador;
    })
})
