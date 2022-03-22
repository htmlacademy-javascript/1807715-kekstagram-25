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
  popup.querySelector('.comments-count').textContent = comments.length;
  addComments();
};

const addComments = ({comments}) => {
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';
  let str = ``;
  for (let i = 0; i < comments.length; i++) {
    str += `<li class="social__comments">
      <img class="social__picture"
      src="${comments[i].avatar}"
      alt="${comments[i].name}"
      width="35"
      height="35">
      <p class="social__text">${comments[i].message}</p>
    </li>`;
  }
  commentsList.innerHTML = str;
}

openPopup.addEventListener('click', (evt) => {
  const getObject = evt.target.getAttribute('src');
  const dataObject = similarPhotoDescription.find((o) => o.url === getObject);
  updateBigPicture(dataObject);
  popup.classList.remove('hidden');
});
