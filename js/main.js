import {similarPhotoDescription} from './data.js';
import {createSimilarPicture} from './photo.js';
import {attachClickHandler} from './big-photo.js';
import './form.js';
import './validation.js';
import './photo-upload.js';
import './scale.js';
import './effects.js';

const similarListPictures = document.querySelector('.pictures');
const similarListFragment = document.createDocumentFragment();

similarPhotoDescription.forEach((similarPicture) => similarListFragment.append(createSimilarPicture(similarPicture)));
similarListPictures.append(similarListFragment);

document.querySelectorAll('.picture').forEach((preview) => attachClickHandler(preview));
