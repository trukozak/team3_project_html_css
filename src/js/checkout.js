(() => {
  const refs = {
    incrementBtns: document.querySelectorAll('[data-increment]'),
    decrementBtns: document.querySelectorAll('[data-decrement]'),
  };

  for (var i = 0; i < refs.incrementBtns.length; i++) {
    refs.incrementBtns[i].addEventListener('click', function (event) {
      var targetElement = event.currentTarget;
      var id = targetElement.dataset.increment;
      incrementValue(id);
    });
  }

  for (var i = 0; i < refs.decrementBtns.length; i++) {
    refs.decrementBtns[i].addEventListener('click', function (event) {
      var targetElement = event.currentTarget;
      var id = targetElement.dataset.decrement;
      decrementValue(id);
    });
  }

  function incrementValue(id) {
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(id).value = value;
  }

  function decrementValue(id) {
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) || value === 0 ? 0 : value - 1;
    document.getElementById(id).value = value;
  }
})();
