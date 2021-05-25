(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-full-descrip-open]'),
      closeModalBtn: document.querySelector('[data-full-descrip-close]'),
      modal: document.querySelector('[data-full-descrip]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();