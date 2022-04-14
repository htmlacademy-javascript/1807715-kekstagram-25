const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;
const controlScale = document.querySelector('.scale__control--value');
const smallerScale = document.querySelector('.scale__control--smaller');
const biggerScale = document.querySelector('.scale__control--bigger');
const imgPreview = document.querySelector('.img-upload__preview');
const effectLevel = document.querySelector('.img-upload__effect-level');

controlScale.value = '100%';

biggerScale.addEventListener('click', () => {
  let scale = parseInt(controlScale.value, 10) + STEP;

  if(scale >= MAX_VALUE) {
    scale = MAX_VALUE;
  }
});

smallerScale.addEventListener('click', () => {
  let scale = parseInt(controlScale.value, 10) + STEP;

  if(scale <= MIN_VALUE) {
    scale = MIN_VALUE;
  }
});
