'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenmodal = document.querySelectorAll('.show-modal');

// Functions
// Function - Open Modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Function - Close Modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open Modal
for (let i = 0; i < btnsOpenmodal.length; i++) {
  btnsOpenmodal[i].addEventListener('click', openModal);
}

// Close Modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
