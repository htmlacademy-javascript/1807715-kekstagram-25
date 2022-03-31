import {onPopupEscKeydown} from './big-photo.js';
import {isEscapeKey} from './util.js';

const uploadPhotoForm = document.querySelector('#upload-file');
const openForm = document.querySelector('.img-upload__overlay');
const closeForm = document.querySelector('#upload-cancel');

uploadPhotoForm.addEventListener('change', () => {
  document.body.classList.add('modal-open');
  openForm.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
});

closeForm.addEventListener('click', () => {
  document.body.classList.remove('modal-open');
  openForm.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
});
