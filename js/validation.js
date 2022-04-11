import {isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const hashtags = document.querySelector('.text__hashtags');
const commentsField = document.querySelector('.text__description');
const MIN_LENGTH = 2;
const MAX_HASHTAGS = 5;
const MAX_LENGTH = 20;
const HASHTAGS_FORMAT = /^#[A-Za-zA-Яa-яЁё0-9]{1,19}$/;

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error',
}, false);

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
  hashtagsValues = hashtagsValues.split(' ');

  for (let i = 0; i < hashtags.length; i++) {
    if (hashtagsValues.length > MAX_HASHTAGS) {
      message = errorMessagesData.MAX_HASHTAG;
      return false;
    }
    if (hashtagsValues[i] !== HASHTAGS_FORMAT) {
      message = errorMessagesData.INVALID_HASHTAG;
      return false;
    }
    if (hashtagsValues[i] !== '#') {
      message = errorMessagesData.START_WITH_HASH;
      return false;
    }
    if (hashtagsValues.length < MIN_LENGTH && hashtagsValues.length > MAX_LENGTH) {
      message = errorMessagesData.MIN_MAX_HASHTAG;
      return false;
    }
    if (hashtagsValues[i] === '#') {
      message = errorMessagesData.NOT_ONLY_HASH;
      return false;
    }
    if (hashtagsValues.indexOf(hashtagsValues) === hashtagsValues.lastIndexOf(hashtagsValues)) {
      message = errorMessagesData.DOUBLE_HASHTAG;
      return false;
    }
    return true;
  }
}

pristine.addValidator(
  hashtags,
  validateHashtag,
  message,
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
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    return true;
  }
  return false;
});
