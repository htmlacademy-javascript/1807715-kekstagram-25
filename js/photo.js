import {createPhotoDescription} from './data.js';
const userPicture = document.querySelector('.big-picture');
//userPicture.classList.remove('hidden');
const similarListPictures = userPicture.querySelector('.pictures');
const similarPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPhotoDescription = createPhotoDescription();

const similarListFragment = document.createDocumentFragment();

similarPhotoDescription.forEach(({url, likes, comments}) => {
  const similarPicture = similarPicturesTemplate.cloneNode(true);
  similarPicture.querySelector('.picture__img').picture__img.src = url;
  similarPicture.querySelector('.picture__likes').textContent = likes;
  similarPicture.querySelector('.picture__comments').textContent = comments;
  similarListFragment.append(similarPicture);
});

similarListPictures.append(similarListFragment);

//3.Адрес изображения url подставьте как атрибут src изображения.
//4.Количество лайков likes выведите в блок .picture__likes.
//5.Количество комментариев comments выведите в блок .picture__comments.
//6.Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

//7.Подключите модуль в проект.
