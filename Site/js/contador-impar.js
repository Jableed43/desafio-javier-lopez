

let contador1 = 0;
let valor1 = document.querySelector(".valor-impar")
let buttonesPopup = document.querySelectorAll(".button-popup11")


buttonesPopup.forEach(button => {
  button.addEventListener('click', () => {
    contador1++
    console.log(contador1);
    valor1.textContent = contador1;
    });
  })





