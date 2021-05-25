productsButton3 = document.querySelector(".button-green")
overflowCart3 = document.querySelector(".overflow-green")
textNone3 = document.querySelector(".text-none-green")

console.log(productsButton3);
productsButton3.addEventListener("click", startOverflow)
function startOverflow() {
  overflowCart3.classList.toggle("visible-text")
  textNone3.classList.toggle("display-none")
}
