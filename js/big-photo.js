import './photo.js';
import {similarPhotoDescription} from './data.js';
import {isEscapeKey} from './util.js';

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

const closeUserModal = () => {
  document.body.classList.remove('modal-open');
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

document.querySelectorAll('.picture').forEach((el) => el.addEventListener('click', (evt) => {
  const getObject = evt.target.getAttribute('src');
  const dataObject = similarPhotoDescription.find((o) => o.url === getObject);
  updateBigPicture(dataObject);
  document.body.classList.add('modal-open');
  popup.classList.remove('hidden');
  popup.querySelector('.social__comment-count').classList.add('hidden');
  popup.querySelector('.comments-loader').classList.add('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  closePopup.addEventListener('click', () => {
    document.body.classList.remove('modal-open');
    popup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
}));

export {popup, openPopup, closePopup, updateBigPicture, similarPhotoDescription};
