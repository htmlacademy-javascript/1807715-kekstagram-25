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
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

//добавит картинке .img-upload__preview CSS-класс, соответствующий эффекту

const addEffects = (value) => {
  imgUpload.className = '';
  if (value !== effectNone) {
    imgUpload.classList.add(`effects__preview--${value}`);
  }
};

addEffects(effectNone);

//измененит уровень интенсивности эффекта

const changeEffectLevel = (type, value) => {
  if (type === effectNone) {
    imgUpload.style.filter = 'none';
  } else if (type === effectMarvin) {
    imgUpload.style.filter = `invert(${value}%)`;
  } else if (type === effectPhobos) {
    imgUpload.style.filter = `blur(${value}px)`;
  } else if (type === effectChrome) {
    imgUpload.style.filter = `grayscale(${value})`;
  } else if (type === effectSepia) {
    imgUpload.style.filter = `sepia(${value})`;
  } else if (type === effectHeat) {
    imgUpload.style.filter = `brightness(${value})`;
  }
};

slider.noUiSlider.on('update', () => {
  effectsValue.value = slider.noUiSlider.get();
  changeEffectLevel(currentEffectType, effectsValue.value);
});

for(let i = 0; i < effectInputs.length; i++) {
  effectInputs[i].addEventListener('change', (evt) => {
    if (evt.target.value === effectChrome) {
      currentEffectType = effectChrome;
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      addEffects(effectChrome);
    } else if (evt.target.value === effectMarvin) {
      currentEffectType = effectMarvin;
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
      addEffects(effectMarvin);
    } else if (evt.target.value === effectPhobos) {
      currentEffectType = effectPhobos;
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 1,
      });
      addEffects(effectPhobos);
    } else if (evt.target.value === effectSepia) {
      currentEffectType = effectSepia;
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      addEffects(effectSepia);
    } else if (evt.target.value === effectHeat) {
      currentEffectType = effectHeat;
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      addEffects(effectHeat);
    } else if (evt.target.value === effectNone) {
      currentEffectType = effectNone;
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
      addEffects(effectNone);
    }
  });
}

//slider.noUiSlider.destroy();

