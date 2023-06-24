const scrollButton = document.getElementById('scrollButton');

scrollButton.addEventListener('click', scrollToTop);

window.addEventListener('scroll', handleScroll);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function handleScroll() {
  scrollButton.classList.toggle('show', window.scrollY > 200);
}

() => {
  const form = document.querySelector('.modal-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
  });
};

const animateTitle = document.querySelector('.main-title');
animateTitle.classList.add('animate__bounceInRight', 'animate__animated', '2s');
