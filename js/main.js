import {createPhotoDescription} from './data.js';

const SIMILAR_PHOTO_DESCRIPTION = 25;

const similarPhotoDescription = Array.from({length: SIMILAR_PHOTO_DESCRIPTION}, createPhotoDescription);
