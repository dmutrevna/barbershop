(() => {
  const openModalBtns = document.querySelectorAll('[data-modal-open]');
  const closeModalBtns = document.querySelectorAll('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');
  const modalOverlay = document.querySelector('.modal-overlay');

  function toggleModal() {
    modal.classList.toggle('is-hidden');

    if (!modal.classList.contains('is-hidden')) {
      document.addEventListener('keydown', closeModalOnEsc);
      modalOverlay.addEventListener('click', closeModalOnBackdrop);
    } else {
      document.removeEventListener('keydown', closeModalOnEsc);
      modalOverlay.removeEventListener('click', closeModalOnBackdrop);
    }
  }

  function closeModalOnEsc(e) {
    if (e.code === 'Escape') {
      toggleModal();
    }
  }

  function closeModalOnBackdrop(e) {
    if (e.target === modalOverlay) {
      toggleModal();
    }
  }

  openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  closeModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
})();
