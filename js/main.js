import {attachClickHandler} from './big-photo.js';
import {renderPhotos} from './photo.js';
import './form.js';
import {setUserFormSubmit, showSuccessPopup, showErrorPopup} from './validation.js';
import './photo-upload.js';
import './scale.js';
import './effects.js';
import {getData} from './fetch.js';

getData((photos) => {
  renderPhotos(photos);
  document.querySelectorAll('.picture').forEach((preview) => attachClickHandler(preview, photos));
});

setUserFormSubmit(showSuccessPopup, showErrorPopup);
