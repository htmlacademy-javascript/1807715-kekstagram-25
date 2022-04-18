import {isEscapeKey} from './util.js';
import {form, pristine} from './validation.js';
import {scaleValue, resetImgValues} from './scale.js';

const uploadPhotoForm = document.querySelector('#upload-file');
const openForm = document.querySelector('.img-upload__overlay');
const closeForm = document.querySelector('#upload-cancel');

const clearForm = () => {
  uploadPhotoForm.value = form.value = '';
  pristine.reset();
  form.reset();
  resetImgValues();
};

const onFormKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormModal();
  }
};

function openFormModal () {
  scaleValue.value = '100%';
  document.body.classList.add('modal-open');
  openForm.classList.remove('hidden');
  document.addEventListener('keydown', onFormKeydown);
}

function closeFormModal () {
  document.body.classList.remove('modal-open');
  openForm.classList.add('hidden');
  document.removeEventListener('keydown', onFormKeydown);
  clearForm();
}

uploadPhotoForm.addEventListener('change', () => {
  openFormModal();
});

closeForm.addEventListener('click', () => {
  closeFormModal();
});
