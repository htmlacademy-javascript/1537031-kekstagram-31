export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

export const generateRandomId = (min, max) => {
  const numbers = [];

  return () => {
    let randomNumber = getRandomInteger(min, max);
    while (numbers.includes(randomNumber)) {
      randomNumber = getRandomInteger(min, max);
    }

    return randomNumber;
  };
};

export const generateId = () => {
  let id = 0;

  return () => {
    id++;
    return id;
  };
};
