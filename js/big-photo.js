import './photo.js';
import {similarPhotoDescription} from './data.js';

const popup = document.querySelector('.big-picture');
const openPopup = document.querySelector('.pictures');
const closePopup = popup.querySelector('.big-picture__cancel');


closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

const updateBigPicture = ({url, likes, comments, description}) => {
  popup.querySelector('.big-picture__img img').src = url;
  popup.querySelector('.likes-count').textContent = likes;
  popup.querySelector('.comments-count').textContent = comments.length;
  popup.querySelector('.social__caption').textContent = description;
};

openPopup.addEventListener('click', (evt) => {
  const getElement = evt.target.getAttribute('src');
  const dataObject = similarPhotoDescription.find((o) => o.url === getElement);
  updateBigPicture(dataObject);
  popup.classList.remove('hidden');
});
