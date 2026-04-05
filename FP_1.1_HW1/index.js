const frutz = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

const countChar = frutz.map((word) => word.length);
console.log(countChar);

console.log('---- ---- ----');

const numbers = [1, 2, 3, 4, 5];

const squareNum = numbers.map((num) => num * num);
console.log(squareNum);

console.log('---- ---- ----');

const fruits = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

const uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(uppercaseFruits);

console.log('---- ---- ----');

const nums = [4, 9, 16, 25, 36];

const rootNum = nums.map((num) => Math.sqrt(num));
console.log(rootNum);

console.log('---- ---- ----');

const fruit = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

const prefixFruits = fruit.map((frit) => 'fruit-' + frit);
console.log(prefixFruits);

console.log('---- ---- ----');

const numbersArray = [1, 2, 3, 4, 5];

const addTen = numbersArray.map((number) => 10 + number);
console.log(addTen);

console.log('---- ---- ----');

const numsArray = [1, 2, 3, 4, 5];

const addSquare = numsArray.map((number) => number + number * number);
console.log(addSquare);

console.log('---- ---- ----');

const numsArr = [-5, 3, -8, 12, -1, 6];

const absolute = numsArr.map((numsArr) => Math.abs(numsArr));
console.log(absolute);

console.log('---- ---- ----');

const phrases = ['Hello', 'How are you', 'Goodbye'];

const appendPhrases = phrases.map((message) => message + '!');
console.log(appendPhrases);

console.log('---- ---- ----');

const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

const capitalizeThirdLetter = words.map(
  (word) => word.slice(0, 2) + word[2].toUpperCase() + word.slice(3)
);
console.log(capitalizeThirdLetter);
