const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const longestWord = words.reduce(
  (acc, curr) => (curr.length > acc.length ? curr : acc),
  words[0]
);
console.log(longestWord);

const numbers = [10, 5, 8, 20, 15];
const minimumNumber = numbers.reduce(
  (acc, curr) => (curr < acc ? curr : acc),
  numbers[0]
);
console.log(minimumNumber);

const wordsLength = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

const totalWordsLength = wordsLength.reduce((acc, curr) => {
  return acc + curr.length;
}, 0);
console.log(totalWordsLength);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalEven = nums.reduce(
  (accumulator, currentValue) =>
    currentValue % 2 === 0 ? accumulator + 1 : accumulator,
  0
);

console.log(totalEven);

const wordsCaps = ['hello', 'world', 'how', 'are', 'you'];

const capWords = wordsCaps.reduce((accumulator, currentValue) => {
  const capitalized =
    currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
  return accumulator ? accumulator + ' ' + capitalized : capitalized;
}, '');

console.log(capWords);

const numsAvg = [10, 15, 20, 25, 30];

const sum = numsAvg.reduce((acc, curr) => acc + curr, 0);
const avgNum = sum / numsAvg.length;
console.log(avgNum);

const numbersNatural = [1, 2, 3, 4, 5];

const sumOfSqr = numbersNatural.reduce((acc, curr) => {
  return acc + curr * curr;
}, 0);
console.log(sumOfSqr);

const stationeryWords = [
  'pen',
  'notebook',
  'eraser',
  'notebook',
  'pencil',
  'notebook',
  'pencil',
];

const wordsCount = stationeryWords.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(wordsCount);

const wordsLetter = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

const wordsLetterCount = wordsLetter.reduce((accumulator, currentValue) => {
  firstLetter = currentValue[0];
  accumulator[firstLetter] = (accumulator[firstLetter] || 0) + 1;
  return accumulator;
}, {});

console.log(wordsLetterCount);

const numPositive = [-2, 3, 4, -5, 6];

const productPositive = numPositive.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    return accumulator * currentValue;
  }
  return accumulator;
}, 1);

console.log(productPositive);
