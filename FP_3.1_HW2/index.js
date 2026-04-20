const stationeryWords = [
  'pen',
  'notebook',
  'eraser',
  'notebook',
  'pencil',
  'notebook',
  'pencil',
];

const wordsLength = stationeryWords.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.length;
}, 0);
console.log(wordsLength);

const numbersArray = [1, 2, 3, 4, 5, 6];

const sumOfEven = numbersArray.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  }
  return accumulator;
}, 0);

console.log(sumOfEven);

const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10];

const countOfOdd = numsArr.reduce((accumulator, currentValue) => {
  if (currentValue % 2 !== 0) {
    return accumulator + 1;
  }
  return accumulator;
}, 0);

console.log(countOfOdd);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenOddCount = nums.reduce((accumulator, currentValue) => {
  const even = 'even';
  if (currentValue % 2 === 0) {
    // return even += 1;
    accumulator[even] = (accumulator[even] || 0) + 1;
  }
  const odd = 'odd';
  if (currentValue % 2 !== 0) {
    accumulator[odd] = (accumulator[odd] || 0) + 1;
  }
  return accumulator;
}, {});
console.log(evenOddCount);

const allNumbers = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];

const countNums = allNumbers.reduce((accumulator, currentValue) => {
  const positive = 'pos';
  if (currentValue > 0) {
    accumulator[positive] = (accumulator[positive] || 0) + 1;
  }
  const negative = 'neg';
  if (currentValue < 0) {
    accumulator[negative] = (accumulator[negative] || 0) + 1;
  }
  return accumulator;
}, {});
console.log(countNums);

const numPositive = [-2, 3, 4, 0, -5, 6];

const numProduct = numPositive.reduce((accumulator, currentValue) => {
  if (currentValue < 0) {
    return accumulator * currentValue;
  }
  return accumulator;
}, 1);
console.log(numProduct);

const wordsCaps = ['reduce', 'method', 'needs', 'a', 'lot', 'of', 'practice'];

const capitalizeWords = wordsCaps.reduce((accumulator, currentValue) => {
  const capitalized = currentValue.toUpperCase();
  return accumulator ? accumulator + ' ' + capitalized : capitalized;
}, '');

console.log(capitalizeWords);

const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];

const countPosEven = allNumsArr.reduce((accumulator, currentValue) => {
  const positive = 'posEven';
  if (currentValue % 2 === 0 && currentValue > 0) {
    accumulator[positive] = (accumulator[positive] || 0) + 1;
  }
  const others = 'others';
  if (currentValue % 2 !== 0 || currentValue < 0) {
    accumulator[others] = (accumulator[others] || 0) + 1;
  }
  return accumulator;
}, {});

console.log(countPosEven);

const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11];

const negativeOdd = numbersArr.reduce((accumulator, currentValue) => {
  if (currentValue % 2 !== 0 && currentValue < 0) {
    return accumulator + currentValue;
  }
  return accumulator;
}, 0);
console.log(negativeOdd);

const letters = ['a', 'l', 'p', 'h', 'a', 'b', 'e', 't'];

const letterToWord = letters.reduce((accumulator, currentValue) => {
  return accumulator ? accumulator + '' + currentValue : currentValue;
}, '');

console.log(letterToWord);
