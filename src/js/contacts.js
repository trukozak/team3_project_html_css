// const accentButton = document.getElementById('accent-button');
// const dropdownMenu = document.getElementById('myDropdown');
// accentButton.onclick = function () {
//   dropdownMenu.classList.toggle('show');
// };
// const myModal = document.getElementById('myModal');
// const myButtun = document.getElementById('cityMaps');
// const closeChicago = document.getElementById('closeChicago');
// myButtun.onclick = function () {
//   myModal.style.display = 'block';
// };
// closeChicago.onclick = function (event) {
//   event.stopPropagation();
//   myModal.style.display = 'none';
//   dropdownMenu.classList.toggle('show');
// };
// const myModall = document.getElementById('myModall');
// const myButtunn = document.getElementById('cityMapss');
// const closeLosAngeles = document.getElementById('closeLosAngeles');
// myButtunn.onclick = function () {
//   myModall.style.display = 'block';
// };
// closeLosAngeles.onclick = function (event) {
//   event.stopPropagation();
//   myModal.style.display = 'none';
//   dropdownMenu.classList.toggle('show');
// };
// const myModalll = document.getElementById('myModalll');
// const myButtunnn = document.getElementById('cityMapsss');
// const closeNewYork = document.getElementById('closeNewYork');
// myButtunnn.onclick = function () {
//   myModalll.style.display = 'block';
// };
// closeNewYork.onclick = function (event) {
//   event.stopPropagation();
//   myModal.style.display = 'none';
//   dropdownMenu.classList.toggle('show');
// };
// window.onclick = function (event) {
//   if (event.target == myModal) {
//     myModal.style.display = 'none';
//     dropdownMenu.classList.toggle('show');
//   }
//   if (event.target == myModall) {
//     myModall.style.display = 'none';
//     dropdownMenu.classList.toggle('show');
//   }
//   if (event.target == myModalll) {
//     myModalll.style.display = 'none';
//     dropdownMenu.classList.toggle('show');
//   }
// };

const ourLocations = document.getElementById('ourLocations')
ourLocations.onclick = function() {
  document.getElementById("myDropDown").classList.toggle("show")
}
const myModal = document.getElementById('myModal')
const myButtun = document.getElementById('cityMaps')

myButtun.onclick = function() {
  myModal.style.display = 'block'
}
const myModall = document.getElementById('myModall')
const myButtunn = document.getElementById('cityMapss')
myButtunn.onclick = function() {
  myModall.style.display = 'block'
}
const myModalll = document.getElementById('myModalll')
const myButtunnn = document.getElementById('cityMapsss')
myButtunnn.onclick = function() {
  myModalll.style.display = 'block'
}
window.onclick = function (event) {
  if (event.target == myModal) {
    myModal.style.display = 'none';
  }
  if (event.target == myModall) {
    myModall.style.display = 'none';
  }
  if (event.target == myModalll) {
    myModalll.style.display = 'none';
  }
}
const buttonClose = document.getElementById('buttonClose')
buttonClose.onclick = function (event) {
  event.stopPropagation();
  myModal.style.display = 'none';
};
const buttonCloseNew = document.getElementById('buttonCloseNew')
buttonCloseNew.onclick = function (event) {
  event.stopPropagation();
  myModall.style.display = 'none';
};
const buttonCloseLos = document.getElementById('buttonCloseLos')
buttonCloseLos.onclick = function (event) {
  event.stopPropagation();
  myModalll.style.display = 'none';
};