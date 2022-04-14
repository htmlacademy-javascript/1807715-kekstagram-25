import {isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const hashtags = document.querySelector('.text__hashtags');
const commentsField = document.querySelector('.text__description');
const MIN_LENGTH = 2;
const MAX_HASHTAGS = 5;
const MAX_LENGTH = 20;
const HASHTAGS_FORMAT = /^#[a-zA-Z0-9a-яA-Я]{2,19}$/;

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error',
});

let message = '';

const errorMessagesData = {
  MAX_HASHTAG: 'Максимальное количество хэштегов не должно превышать 5',
  INVALID_HASHTAG: 'Неверный формат',
  START_WITH_HASH: 'Хэштег должен начинаться с #',
  MIN_MAX_HASHTAG: 'Хэштег должен состоять минимум из 2,максимум из 20 символов',
  NOT_ONLY_HASH: 'Хэштег не может состоять только из #',
  DOUBLE_HASHTAG: 'Повторяющийся хэштег!',
};

function validateHashtag() {
  let hashtagsValues = hashtags.value.toLowerCase();
  if (hashtagsValues === '') {
    return true;
  }
  hashtagsValues = hashtagsValues.split(' ');
  for (const hashtag of hashtagsValues) {
    if (hashtagsValues.length > MAX_HASHTAGS) {
      message = 'MAX_HASHTAG';
      return false;
    }
    if (hashtag[0] !== '#') {
      message = 'START_WITH_HASH';
      return false;
    }
    if (hashtagsValues.length < MIN_LENGTH && hashtagsValues.length > MAX_LENGTH) {
      message = 'MIN_MAX_HASHTAG';
      return false;
    }
    if (hashtag === '#') {
      message = 'NOT_ONLY_HASH';
      return false;
    }
    if (hashtagsValues.indexOf(hashtag) !== hashtagsValues.lastIndexOf(hashtag)) {
      message = 'DOUBLE_HASHTAG';
      return false;
    }
    if (!hashtag.match(HASHTAGS_FORMAT)) {
      message = 'INVALID_HASHTAG';
      return false;
    }
  }
  return true;
}

const showMessage = () => errorMessagesData[message];

pristine.addValidator(
  hashtags,
  validateHashtag,
  showMessage,
);

const onFocusKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

hashtags.addEventListener('keydown', onFocusKeydown);
commentsField.addEventListener('keydown', onFocusKeydown);

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
  return isValid;
});

export {form, pristine};
