(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-order-open]'),
    closeModalBtn: document.querySelector('[data-menu-order-close]'),
    modal: document.querySelector('[data-menu-order]'),
    mobileList: document.querySelector('.site-nav__mobile'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.mobileList.addEventListener('click', removeMenu);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function removeMenu() {
    refs.modal.classList.add('is-hidden');
  }
})();
