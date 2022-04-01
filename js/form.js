import {isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const uploadPhotoForm = document.querySelector('#upload-file');
const openForm = document.querySelector('.img-upload__overlay');
const closeForm = document.querySelector('#upload-cancel');
const hashtags = uploadPhotoForm.querySelector('.text__hashtags');

const pristine = new Pristine(form);

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

function validateHashtag(hashtags) {
  const hashtagFormat = /^#[A-Za-zA-Яa-яЁё0-9]{1,19}$\s/;
  if(hashtags.value.match(hashtagFormat))
  {
    return true;
  }
  hashtags.focus();
  return ('Невалидный формат');
}

function validateComments(value) {
  if(value.length <= 140)
  {
    return true;
  }
  return ('Максимальная длина комментария 140 символов');
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

uploadPhotoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();

  const isValid = pristine.validate();
  if (isValid) {
    return true;
  }
  return('Форма невалидна');
});

