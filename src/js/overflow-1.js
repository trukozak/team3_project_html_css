productsButton1 = document.querySelector(".button-pink")
overflowCart1 = document.querySelector(".overflow-pink")
textNone1 = document.querySelector(".text-none-pink")

console.log(productsButton1);
productsButton1.addEventListener("click", startOverflow)
function startOverflow() {
  overflowCart1.classList.toggle("visible-text")
  textNone1.classList.toggle("display-none")
}
