productsButton = document.querySelector(".products__button")
overflowCart = document.querySelector(".overflow")
textNone = document.querySelector(".text-none")

console.log(productsButton);
productsButton.addEventListener("click", startOverflow)
function startOverflow() {
  overflowCart.classList.toggle("visible-text")
  textNone.classList.toggle("display-none")
}
