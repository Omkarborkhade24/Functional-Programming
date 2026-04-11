const nums = [12, 5, 20, 8, 15, 30];

const numsGreaterThan10 = nums.filter((num) => num > 10);
console.log(numsGreaterThan10);

const words = ['hello', 'world', 'apple', 'orange', 'banana'];
const stringsContainingLetterO = words.filter((word) => word.includes('o'));
console.log(stringsContainingLetterO);

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const primeNumbers = numbers.filter((num) => isPrime(num));
console.log(primeNumbers);

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const notMultiples = threeMultiples.filter((num) => num % 3 != 0);
console.log(notMultiples);

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberNotDivisibleBy2And3 = numbs.filter(
  (num) => num % 2 != 0 && num % 3 != 0
);
console.log(numberNotDivisibleBy2And3);

const fruits = ['APPLE', 'banana', 'KIWI', 'ORANGE', 'GRAPE'];
const upperCaseStrings = fruits.filter((word) => word === word.toUpperCase());
console.log(upperCaseStrings);

const wordsY = ['happy', 'sad', 'sunny', 'cloudy', 'rainy'];
const notEndingWithY = wordsY.filter((word) => word[word.length - 1] != 'y');
console.log(notEndingWithY);

const numsNatural = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOf2And3 = numsNatural.filter(
  (num) => num % 2 === 0 && num % 3 === 0
);
console.log(multiplesOf2And3);

const feelingWords = ['happy', 'sad', 'sunny', 'cloudy', 'rainy'];
const wordIncludesYAndU = feelingWords.filter((word) =>
  word.includes('y' && 'u')
);
console.log(wordIncludesYAndU);

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOf5And3 = newNums.filter(
  (number) => number % 5 === 0 || number % 3 === 0
);
console.log(multiplesOf5And3);
