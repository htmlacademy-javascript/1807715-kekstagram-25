import {isEscapeKey} from './util.js';

const uploadPhotoForm = document.querySelector('#upload-file');
const openForm = document.querySelector('.img-upload__overlay');
const closeForm = document.querySelector('#upload-cancel');

const onFormKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormModal();
  }
};

function openFormModal () {
  document.body.classList.add('modal-open');
  openForm.classList.remove('hidden');
  document.addEventListener('keydown', onFormKeydown);
}

function closeFormModal () {
  document.body.classList.remove('modal-open');
  openForm.classList.add('hidden');
  document.removeEventListener('keydown', onFormKeydown);
}

uploadPhotoForm.addEventListener('change', () => {
  openFormModal();
});

closeForm.addEventListener('click', () => {
  closeFormModal();
});
