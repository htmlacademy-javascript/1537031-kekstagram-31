import {generateId, generateRandomId, getRandomArrayElement, getRandomInteger} from './utils';
import {DESCRIPTIONS, MESSAGES, NAMES} from './data';

export const ELEMENTS_AMOUNT = 25;

const IMG_AMOUNT = 6;

const MAX_COMMENTS = 30;

const getPhoto = (number) => `photos/${number}.jpg`;
const getAvatar = () => `img/avatar-${getRandomInteger(1, IMG_AMOUNT)}.svg`;


const getId = generateId();
const getCommentId = generateRandomId(1, 30000);

const getComments = (maxCount) => {
  const comments = [];
  const commentsAmount = getRandomInteger(0, maxCount);

  for (let i = 0; i <= commentsAmount; i++) {

    const comment = {
      id: getCommentId(),
      avatar: getAvatar(),
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    };
    comments.push(comment);
  }
  return comments;
};

export const getMiniature = () => ({
  id: getId(),
  url: getPhoto(getRandomInteger(1, 6)),
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: getComments(MAX_COMMENTS),
});


//
// const getData = (dataAmount) => {
// //  let commentsId = 0;
//
//
//
//   const data = [];
//
//   for (let i = 0; i < dataAmount; i++) {
//     const obj = {
//       id: i + 1,
//       url: getPhoto(i + 1),
//       description: 'Здесь подпись к фотографии',
//       likes: getRandomInteger(15, 200),
//       comments: getComments(),
//     };
//
//     data.push(obj);
//   }
//   return data;
// };
