console.log('FP1.1_HW2');

console.log('---- ---- ----');

const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

const threeChar = words.map((char) => char.slice(0, 3));
console.log(threeChar);

const nums = [1, 2, 3, 4, 5];

const numCube = nums.map((num) => num * num * num);
console.log(numCube);

const fruitsArray = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

const stringExtract = fruitsArray.map((fruits) => fruits.slice(2));
console.log(stringExtract);

const salaries = [5000, 7500, 12000, 3000, 9000];

const bonusPay = salaries.map((pay) => pay + pay * 0.1);
console.log(bonusPay);

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

const messageBind = names.map((name) => 'Hello, ' + name);
console.log(messageBind);

const sentences = [
  'Hello, how are you?',
  'JavaScript is fun!',
  'Arrays are versatile.',
];

const countChar = sentences.map((char) => char.length);
console.log(countChar);

const temperaturesCelsius = [0, 20, 37, -5, 10];

const temperaturesFahrenheit = temperaturesCelsius.map((temp) =>
  (temp * 1.8 + 32).toFixed(1)
);
const decimal = temperaturesFahrenheit.map((temp) => parseFloat(temp));
console.log(decimal);

const prices = [50, 75, 120, 30, 90];

const discountedPrice = prices.map((cost) => cost - cost * 0.1);
console.log(discountedPrice);

const decimalNumbers = [50.2456, 750.5677, 12.56705, 300.5065, 9.23406789];

const fixedDecimal = decimalNumbers.map((num) => num.toFixed(2));
console.log(fixedDecimal);

const namesArray = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

const lengthChar = namesArray.map((name) => name + name.length);
console.log(lengthChar);
