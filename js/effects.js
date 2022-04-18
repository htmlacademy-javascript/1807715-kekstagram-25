const MIN_VALUE = 0;
const MAX_VALUE = 100;
const START_VALUE = 100;
const STEP_VALUE = 1;

const effectsOptionsList = {
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    effectName: 'grayscale',
    start: 1,
    step: 0.1,
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    effectName: 'sepia',
    start: 1,
    step: 0.1,
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    effectName: 'invert',
    start: 100,
    step: 1,
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    effectName: 'blur',
    start: 3,
    step: 1,
  },
  heat: {
    range: {
      min: 0,
      max: 3,
    },
    effectName: 'brightness',
    start: 3,
    step: 0.1,
  },
  none: {
    range: {
      min: 0,
      max: 100,
    },
    effectName: 'none',
    start: 100,
    step: 1,
  },
};

const imgUpload = document.querySelector('.img-upload__preview img');
const effectsValue = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const effectNone = document.querySelector('#effect-none').value;
const effectChrome = document.querySelector('#effect-chrome').value;
const effectSepia = document.querySelector('#effect-sepia').value;
const effectMarvin = document.querySelector('#effect-marvin').value;
const effectPhobos = document.querySelector('#effect-phobos').value;
const effectHeat = document.querySelector('#effect-heat').value;
const effectInputs = document.querySelectorAll('.effects__radio');

effectsValue.value = 100;
let currentEffectType = effectNone;

// создает slider

noUiSlider.create(slider, {
  range: {
    min: MIN_VALUE,
    max: MAX_VALUE,
  },
  start: START_VALUE,
  step: STEP_VALUE,
  connect: 'lower',
  format: {
    to: function (value) {
      return (Number.isInteger(value)) ? value.toFixed(0) : value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

//добавит картинке .img-upload__preview CSS-класс, соответствующий эффекту

const addEffects = (value) => {
  imgUpload.className = '';
  imgUpload.classList.toggle(`effects__preview--${value}`, (value !== effectNone));
};

addEffects(effectNone);

//измененит уровень интенсивности эффекта

const changeEffectLevel = (type, value) => {
  let currentEffect;
  switch (type) {
    case effectNone:
      slider.setAttribute('disabled', true);
      currentEffect = 'none';
      break;
    case effectChrome:
      slider.removeAttribute('disabled');
      currentEffect = `grayscale(${value})`;
      break;
    case effectMarvin:
      slider.removeAttribute('disabled');
      currentEffect = `invert(${value}%)`;
      break;
    case effectPhobos:
      slider.removeAttribute('disabled');
      currentEffect = `blur(${value}px)`;
      break;
    case effectSepia:
      slider.removeAttribute('disabled');
      currentEffect = `sepia(${value})`;
      break;
    case effectHeat:
      slider.removeAttribute('disabled');
      currentEffect = `brightness(${value})`;
      break;
  }
  imgUpload.style.filter = currentEffect;
};


slider.noUiSlider.on('update', () => {
  effectsValue.value = slider.noUiSlider.get();
  changeEffectLevel(currentEffectType, effectsValue.value);
});

effectInputs.forEach((el) => {
  el.addEventListener('change', (evt) => {
    const value = evt.target.value;
    currentEffectType = value;
    slider.noUiSlider.updateOptions(effectsOptionsList[value]);
    addEffects(value);
  });
});
