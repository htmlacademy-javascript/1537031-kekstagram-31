const ELEMENTS_AMOUNT = 25;

const IMG_AMOUNT = 6;

const MAX_COMMENTS = 30;

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const getPhoto = (number) => `photos/${number}.jpg`;
const getAvatar = () => `img/avatar-${getRandomInteger(1, IMG_AMOUNT)}.svg`;


const getData = (dataAmount) => {
  let commentsId = 0;

  const getComments = () => {
    const comments = [];
    const commentsAmount = getRandomInteger(0, MAX_COMMENTS);

    for (let i = 0; i <= commentsAmount; i++) {
      commentsId++;

      const comment = {
        id: commentsId,
        avatar: getAvatar(),
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES),
      };
      comments.push(comment);
    }
    return comments;
  };

  const data = [];

  for (let i = 0; i < dataAmount; i++) {
    const obj = {
      id: i + 1,
      url: getPhoto(i + 1),
      description: 'Здесь подпись к фотографии',
      likes: getRandomInteger(15, 200),
      comments: getComments(),
    };

    data.push(obj);
  }
  return data;
};

// eslint-disable-next-line no-unused-vars
const elements = getData(ELEMENTS_AMOUNT);
