const isStringShorter = (str, maxLength) => str.length <= maxLength;

isStringShorter('проверяемая строка', 20);
isStringShorter('проверяемая строка', 18);
isStringShorter('проверяемая строка', 10);

const isPalindrome = (str) => {

  const modifiedString = str.replaceAll(' ', '').toLowerCase();
  let result = '';
  let i = str.length - 1;
  while (i >= 0) {
    result = result + modifiedString.at(i);
    i--;
  }
  return modifiedString === result;
};

isPalindrome('топот');
isPalindrome('ДовОд');
