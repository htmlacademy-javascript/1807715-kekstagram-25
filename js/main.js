import {similarPhotoDescription, similarListFragment, createSimilarPicture, similarListPictures} from './photo.js';

similarPhotoDescription.forEach((similarPicture) => similarListFragment.append(createSimilarPicture(similarPicture)));
similarListPictures.append(similarListFragment);

import {attachClickHandler} from './big-photo.js';

document.querySelectorAll('.picture').forEach((preview) => attachClickHandler(preview));
