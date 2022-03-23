import './photo.js';
import {popup, openPopup, closePopup, updateBigPicture, similarPhotoDescription} from './big-photo.js';

openPopup.addEventListener('click', (evt) => {
  if(evt.target.parentNode.matches('.picture')){
    const getObject = evt.target.getAttribute('src');
    const dataObject = similarPhotoDescription.find((o) => o.url === getObject);
    updateBigPicture(dataObject);
    document.body.classList.add('modal-open');
    popup.classList.remove('hidden');
    popup.querySelector('.social__comment-count').classList.add('hidden');
    popup.querySelector('.comments-loader').classList.add('hidden');
    closePopup.addEventListener('click', () => {
      document.body.classList.remove('modal-open');
      popup.classList.add('hidden');
    });
  }
});

document.addEventListener('keydown', (evt) => {
  if(evt.code === 'Escape') {
    popup.classList.add('hidden');
  }
});

