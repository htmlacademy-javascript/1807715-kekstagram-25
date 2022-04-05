import {uploadPhotoForm} from './form.js';
import {isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const hashtags = form.querySelector('.text__hashtags');
const commentsField = form.querySelector('.text__description');
const MAX_HASHTAGS = 5;
const MIN_LENGTH = 2;
const MAX_LENGTH = 20;
const MAX_COMMENT_SYMBOLS = 140;

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'error-text',
}, false);

function validateHashtag() {
  let hashtagsValues = hashtags.value.toLowerCase();
  hashtagsValues = hashtagsValues.split(' ');
  if (hashtagsValues.length > MAX_HASHTAGS) {
    return false;
  }
  const a = hashtagsValues.filter((element) => checkHashtag(element, hashtagsValues));
  if (a.length !== hashtagsValues.length) {
    return false;
  }
  return true;
}

const checkHashtag = (hashtag, array) => (hashtag[0] === '#') && (hashtag.length > MIN_LENGTH) && (hashtag.length <= MAX_LENGTH) && (hashtag.lastIndexOf('#') === 0) && (array.indexOf(hashtag) === array.lastIndexOf(hashtag));

function validateComments() {
  commentsField.addEventListener('input', () => {
    const commentsValues = commentsField.value;
    if(commentsValues.length > MAX_COMMENT_SYMBOLS) {
      return false;
    }
  });
}

pristine.addValidator(
  uploadPhotoForm,
  validateHashtag,
  'Количество хештегов должно быть не более 5',
);

pristine.addValidator(
  uploadPhotoForm,
  validateComments,
  'Количество символов не должно превышать 140',
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
  return('Форма невалидна');
});
