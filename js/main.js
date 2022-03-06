function getStringLength(comment, maxLength) {
  if (comment.length <= maxLength) {
    return true;
  }
}
getStringLength();

const NAMES = [
  'Tom',
  'George',
  'Carl',
  'Natali',
  'Alan',
  'John',
  'Bob',
  'Randy',
  'Margo',
];

const MESSAGES = [
  'Всё отлично!',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const SIMILAR_PHOTO_DESCRIPTION = 25;
const MAXIMUM_ID = 25;
const MAXIMUM_URL = 25;
const MAXIMUM_LIKES = 200;
const MAXIMUM_AVATAR = 6;

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    throw new Error('Невалидный тип данных');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createPhotoDescription = () => ({
  id: getRandomNumber(1, MAXIMUM_ID),
  url: `photos/${getRandomNumber(1, MAXIMUM_URL)}.jpg`,
  description: 'Вкусный завтрак у моря.',
  likes: getRandomNumber(15, MAXIMUM_LIKES),
  comments: [
    {
      id: getRandomNumber(),
      avatar: `img/avatar-${getRandomNumber(1, MAXIMUM_AVATAR)}.svg`,
      name: getRandomArrayElement(NAMES),
      message: getRandomArrayElement(MESSAGES),
    },
    {
      id: getRandomNumber(),
      avatar: `img/avatar-${getRandomNumber(1, MAXIMUM_AVATAR)}.svg`,
      name: getRandomArrayElement(NAMES),
      message: getRandomArrayElement(MESSAGES),
    }
  ]
});

const similarPhotoDescription = Array.from({length: SIMILAR_PHOTO_DESCRIPTION}, createPhotoDescription);

createPhotoDescription();

