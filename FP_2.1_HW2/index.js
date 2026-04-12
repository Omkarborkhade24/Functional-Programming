const nums = [12, 5, 20, 7, 8, 15, 30];
const evenNumbers = nums.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const words = ['kiwi', 'mango', 'apple', 'orange', 'banana'];
const greaterThan5Length = words.filter((word) => word.length > 5);
console.log(greaterThan5Length);

const wordsOfPlanets = ['Sun', 'Moon', 'Star', 'Planet', 'Saturn'];
const startsWithS = wordsOfPlanets.filter((word) => word.startsWith('S'));
console.log(startsWithS);

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOfThree = threeMultiples.filter((num) => num % 3 != 0);
console.log(multiplesOfThree);

const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const divisibleBy7And3 = numbs.filter((num) => num % 7 === 0 && num % 3 === 0);
console.log(divisibleBy7And3);

const fruits = ['APPLE', 'banana', 'KIWI', 'orange', 'GRAPE'];
const lowerCaseString = fruits.filter((fruit) => fruit === fruit.toLowerCase());
console.log(lowerCaseString);

const wordsY = ['happy', 'sad', 'sunny', 'cloudy', 'rainy'];
const noA = wordsY.filter((word) => !word.includes('a'));
console.log(noA);

const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberMultiplier = numsOnetoTen.filter(
  (number) => number % 2 === 0 || number % 3 === 0
);
console.log(numberMultiplier);

const feelingWords = ['happy', 'sad', 'weepy', 'sleepy', 'rainy'];
const includesYOrA = feelingWords.filter((word) => word.includes('y') || 'a');
console.log(includesYOrA);

const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];
const between20To40Number = newNums.filter((num) => num >= 20 && num <= 40);
console.log(between20To40Number);
