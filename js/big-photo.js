import './photo.js';
import {similarPhotoDescription} from './data.js';

const popup = document.querySelector('.big-picture');
const openPopup = document.querySelector('.pictures');
const closePopup = document.querySelector('.big-picture__cancel');

const addComments = ({comments}) => {
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';
  let str = '';
  for (let i = 0; i < comments.length; i++) {
    str += `<li class="social__comment">
      <img class="social__picture"
      src="${comments[i].avatar}"
      alt="${comments[i].name}"
      width="35"
      height="35">
      <p class="social__text">${comments[i].message}</p>
    </li>`;
  }
  commentsList.innerHTML = str;
};

const updateBigPicture = (clickedElement) => {
  document.body.classList.add('modal-open');
  popup.querySelector('.big-picture__img img').src = clickedElement.url;
  popup.querySelector('.likes-count').textContent = clickedElement.likes;
  popup.querySelector('.social__caption').textContent = clickedElement.description;
  popup.querySelector('.comments-count').textContent = clickedElement.comments.length;
  addComments(clickedElement);
};

openPopup.addEventListener('click', (evt) => {
  if(evt.target.parentNode.matches('.picture')){
    const getObject = evt.target.getAttribute('src');
    const dataObject = similarPhotoDescription.find((o) => o.url === getObject);
    updateBigPicture(dataObject);
    document.body.classList.add('modal-open');
    popup.classList.remove('hidden');
    closePopup.addEventListener('click', () => {
      popup.classList.add('hidden');
    });
  }
});
