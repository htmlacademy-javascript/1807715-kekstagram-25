import './photo.js';

const popup = document.querySelector('.big-picture');
const openPopup = document.querySelector('.pictures');
const closePopup = popup.querySelector('.big-picture__cancel');


closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

openPopup.addEventListener('click', () => {
  popup.classList.remove('hidden');
});
