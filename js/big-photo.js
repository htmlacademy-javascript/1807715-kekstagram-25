import {createSimilarPicture} from './photo.js';

const userDialog = document.querySelector('.big-picture');
userDialog.classList.remove('hidden');

const userDialogContent = document.querySelector('.big-picture__preview').content;
const similarUserDialog = createSimilarPicture();
const similarListFragment = document.createDocumentFragment();

similarUserDialog.forEach((url, likes, comments) => {
  const similarElement = userDialogContent.cloneNode(true);
  similarElement.querySelector('.big-picture__img').src = url;
  similarElement.querySelector('.likes-count').textContent = likes;
  similarElement.querySelector('.comments-count').textContent = comments;
  similarListFragment.appendChild(similarElement);
});

userDialog.appendChild(similarListFragment);
//4.Количество лайков likes подставьте как текстовое содержание элемента .likes-count.
//5.Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.

//6.Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments.
//Разметка каждого комментария должна выглядеть так:
//7.Описание фотографии description вставьте строкой в блок .social__caption.

//8.После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

//9.После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

//10.Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

//11.Подключите модуль в проект.
