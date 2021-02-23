const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButton = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButton.forEach(val => {
  val.addEventListener('click', () => {
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
});

const closeModal = () => {
  backdrop.classList.remove('open');
  modal.classList.remove('open');
};

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) modalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
  backdrop.classList.add('open');
  mobileNav.classList.add('open');
});
