const MINIMUM_LIKES = 15;
const MAXIMUM_LIKES = 200;
const MAXIMUM_AVATAR = 6;
const SIMILAR_PHOTO_DESCRIPTION = 25;

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
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

function getStringLength(comment, maxLength) {
  if (comment.length <= maxLength) {
    return true;
  }
}
getStringLength();

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    throw new Error('Невалидный тип данных');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];
const getRandomComment = () => {
  return [
    {
      id: getRandomNumber(),
      avatar: `img/avatar-${getRandomNumber(1, MAXIMUM_AVATAR)}.svg`,
      name: getRandomArrayElement(NAMES),
      message: getRandomArrayElement(MESSAGES),
    }
  ];
};

let counter = 1;

const createPhotoDescription = () => ({
  id: counter,
  url: `photos/${counter++}.jpg`,
  description: 'Вкусный завтрак у моря.',
  likes: getRandomNumber(MINIMUM_LIKES, MAXIMUM_LIKES),
  comments: Array.from({ length: getRandomNumber(1,5) }, getRandomComment),
});

const similarPhotoDescription = Array.from({length: SIMILAR_PHOTO_DESCRIPTION}, createPhotoDescription);
