import {preview} from './photo-upload.js';

const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;
const scaleValue = document.querySelector('.scale__control--value');
const smallerScale = document.querySelector('.scale__control--smaller');
const biggerScale = document.querySelector('.scale__control--bigger');

biggerScale.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) + STEP;
  if (scale >= MAX_VALUE) {
    scale = MAX_VALUE;
  }
  scaleValue.value = `${ scale }%`;
  preview.style.transform = `scale(${  scale / 100  })`;//изменит масштаб.
});

smallerScale.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) - STEP;
  if (scale <= MIN_VALUE) {
    scale = MIN_VALUE;
  }
  scaleValue.value = `${ scale }%`;
  preview.style.transform = `scale(${  scale / 100  })`;
});

function resetImgValues () {
  preview.removeAttribute('class');
  preview.removeAttribute('style');
}

export {scaleValue, resetImgValues};
