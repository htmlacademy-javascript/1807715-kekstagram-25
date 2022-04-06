import {isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const hashtags = document.querySelector('.text__hashtags');
const commentsField = document.querySelector('.text__description');
const MAX_HASHTAGS = 5;
const MIN_LENGTH = 2;
const MAX_LENGTH = 20;
const MAX_COMMENT_SYMBOLS = 140;

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error',
}, false);

const checkHashtag = (hashtag, array) => (hashtag[0] === '#') && (hashtag.length > MIN_LENGTH) && (hashtag.length <= MAX_LENGTH) && (hashtag.lastIndexOf('#') === 0) && (array.indexOf(hashtag) === array.lastIndexOf(hashtag));

function validateHashtag() {
  let hashtagsValues = hashtags.value.toLowerCase();
  hashtagsValues = hashtagsValues.split(' ');
  if (hashtagsValues.length > MAX_HASHTAGS) {
    return false;
  }
  const elementValue = hashtagsValues.filter((element) => checkHashtag(element, hashtagsValues));
  if (elementValue.length !== hashtagsValues.length) {
    return false;
  }
  return true;
}

pristine.addValidator(
  hashtags,
  validateHashtag,
  'Количество хештегов должно быть не более 5',
);

function validateComments() {
  commentsField.addEventListener('change', () => {
    const commentsValues = commentsField.value;
    return commentsValues.length > MAX_COMMENT_SYMBOLS;
  });
}

pristine.addValidator(
  commentsField,
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
  return false;
});
