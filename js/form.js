const form = document.querySelector('.img-upload__form');
const hashtags = form.querySelector('.text__hashtags');
const pristine = new Pristine(form);

function validateHashtag(hashtags) {
  const hashtagFormat = /^#[A-Za-zA-Яa-яЁё0-9]{1,19}$\s/;
  if(hashtags.value.match(hashtagFormat))
  {
    return true;
  }
  hashtags.focus();
  return ('Невалидный формат');
}

pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtag);

function validateComments (value) {
  return value.length <= 140;
}
pristine.addValidator(form.querySelector('.social__footer-text'),
  validateComments,
  'Максимальная длина комментария 140 символов',
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
