//1.По умолчанию должен быть выбран эффект «Оригинал».
//2.На изображение может накладываться только один эффект.
//3.При смене эффекта, выбором одного из значений среди радиокнопок .effects__radio, добавить картинке внутри .img-upload__preview CSS-класс,
//соответствующий эффекту. Например, если выбран эффект .effect-chrome,
//изображению нужно добавить класс effects__preview--chrome.
//4.Интенсивность эффекта регулируется перемещением ползунка в слайдере.
const imgUpload = document.querySelector('.img-upload__preview');
const effectsValue = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');

effectsValue.value = 100;
let currentEffect = 'none';

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
  imgUpload.querySelector('img').className = '';
  if (value !== 'none') {
    imgUpload.querySelector('img').classList.add(`effects__preview--${value}`);
  }
};

addEffects(currentEffect);

//измененит уровень интенсивности эффекта
const changeEffectLevel = (type, value) => {
  if (type === 'none') {
    imgUpload.querySelector('img').style.filter = 'none';
  } else if (type === 'gracescale') {
    imgUpload.querySelector('img').style.filter = `${type}(${value})`;
  } else if (type === 'sepia') {
    imgUpload.querySelector('img').style.filter = `${type}(${value})`;
  } else if (type === 'invert') {
    imgUpload.querySelector('img').style.filter = `${type}(${value}%)`;
  } else if (type === 'blur') {
    imgUpload.querySelector('img').style.filter = `${type}(${value}px)`;
  } else if (type ==='brightness') {
    imgUpload.querySelector('img').style.filter = `${type}(${value})`;
  }
};

slider.noUiSlider.on('update', () => {
  effectsValue.value = slider.noUiSlider.get();
});

effectChrome.addEventListener('change', (evt) => {

  if (evt.target.checked) {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    });
  }
});

//slider.noUiSlider.destroy();

//6.При выборе эффекта «Оригинал» слайдер скрывается.
//5.Уровень эффекта записывается в поле .effect-level__value. При изменении уровня интенсивности эффекта (предоставляется API слайдера),
//CSS-стили картинки внутри .img-upload__preview обновляются следующим образом:
/*Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
Для эффекта «Оригинал» CSS-стили filter удаляются.*/

//7.При переключении эффектов, уровень насыщенности сбрасывается до начального значения (100%):
//слайдер, CSS-стиль изображения и значение поля должны обновляться
