import './photo.js';
import {similarPhotoDescription} from './data.js';
import {isEscapeKey} from './util.js';

const popup = document.querySelector('.big-picture');
const closePopup = document.querySelector('.big-picture__cancel');
const loadedComments = document.querySelector('.comments-loaded');
const uploadCommentsButton = document.querySelector('.comments-loader');

const addComments = ({ comments }) => {
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';
  if (comments.length > 0) {
    const getCommentsList = comments.reduce((prev, curr) => (
      `${prev
      }<li class="social__comment">
            <img class="social__picture"
            src="${curr.avatar}"
            alt="${curr.name}"
            width="35"
            height="35">
            <p class="social__text">${curr.message}</p>
          </li>`
    ), '');
    commentsList.innerHTML = getCommentsList;
    const commentsBox = document.querySelectorAll('.social__comment');
    for (let i = 5; i < commentsBox.length; i++) {
      commentsBox[i].classList.add('hidden');
    }
  }
};

const onShowMoreButtonClick = () => {
  const hiddenComments = document.querySelectorAll('.social__comment.hidden');
  const hiddenCommentsList = hiddenComments.length;
  for (let i = 0; i < hiddenCommentsList; i++) {
    hiddenComments[i].classList.remove('hidden');
    uploadCommentsButton.classList.add('hidden');
  }
  loadedComments.textContent = +loadedComments.textContent + hiddenCommentsList;
};

const updateBigPicture = (clickedElement) => {
  document.body.classList.add('modal-open');
  popup.querySelector('.big-picture__img img').src = clickedElement.url;
  popup.querySelector('.likes-count').textContent = clickedElement.likes;
  popup.querySelector('.social__caption').textContent = clickedElement.description;
  popup.querySelector('.comments-count').textContent = clickedElement.comments.length;
  if (clickedElement.comments.length <= 5) {
    loadedComments.textContent = clickedElement.comments.length;
    uploadCommentsButton.classList.add('hidden');
  } else {
    loadedComments.textContent = 5;
    uploadCommentsButton.classList.remove('hidden');
    uploadCommentsButton.addEventListener('click', onShowMoreButtonClick);
  }
  addComments(clickedElement);
};

const closeModal = () => {
  uploadPhotoForm.value = '';
  document.body.classList.remove('modal-open');
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

function onPopupEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

function attachClickHandler(preview) {
  preview.addEventListener('click', () => {
    const getObject = preview.querySelector('img').getAttribute('src');
    const dataObject = similarPhotoDescription.find((o) => o.url === getObject);
    updateBigPicture(dataObject);
    document.body.classList.add('modal-open');
    popup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscKeydown);
  });
}

closePopup.addEventListener('click', () => {
  document.body.classList.remove('modal-open');
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
});

export {attachClickHandler};
