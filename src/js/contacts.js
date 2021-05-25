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