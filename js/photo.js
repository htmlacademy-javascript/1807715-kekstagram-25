import {similarPhotoDescription} from './data.js';

const similarPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createSimilarPicture = ({url, likes, comments}) => {
  const similarPicture = similarPicturesTemplate.cloneNode(true);
  similarPicture.querySelector('.picture__img').src = url;
  similarPicture.querySelector('.picture__likes').textContent = likes;
  similarPicture.querySelector('.picture__comments').textContent = comments.length;
  return similarPicture;
};

export {similarPhotoDescription, createSimilarPicture};
