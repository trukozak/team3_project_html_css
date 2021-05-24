productsButton2 = document.querySelector(".button-beige")
overflowCart2 = document.querySelector(".overflow-beige")
textNone2 = document.querySelector(".text-none-beige")

console.log(productsButton2);
productsButton2.addEventListener("click", startOverflow)
function startOverflow() {
  overflowCart2.classList.toggle("visible-text")
  textNone2.classList.toggle("display-none")
}
