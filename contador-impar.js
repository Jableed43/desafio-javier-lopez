

let contador1 = 0;
let buttonPopup = document.querySelector(".button-popup11")
let valor1 = document.querySelector("#valor-11")


buttonPopup.addEventListener ('click', function(e) {
  const estilos = e.currentTarget.classList;


  if(estilos.contains('aumentar-11')) {
   contador1++;
  }

  valor1.innerHTML = contador1;
})