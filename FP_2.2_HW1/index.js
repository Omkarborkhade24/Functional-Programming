// 1.
const students = [
  { name: 'Alice', grade: 80 },
  { name: 'Bob', grade: 65 },
  { name: 'Charlie', grade: 90 },
];

const gradeWise = students.filter((student) => student.grade > 70);
console.log(gradeWise);

// 2.
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Smartphone', price: 800 },
  { name: 'Tablet', price: 500 },
];

const FilterPriceHigherThan1000 = products.filter(
  (product) => product.price > 1000
);
console.log(FilterPriceHigherThan1000);

// 3.
const employees = [
  { name: 'Alice', salary: 60000 },
  { name: 'Bob', salary: 45000 },
  { name: 'Charlie', salary: 70000 },
];

const salaryGreaterThan50K = employees.filter(
  (employee) => employee.salary > 50000
);
console.log(salaryGreaterThan50K);

// 4.
const movies = [
  { title: 'Inception', rating: 8.8 },
  { title: 'Interstellar', rating: 8.6 },
  { title: 'The Dark Knight', rating: 9.0 },
];

const ratingWise = movies.filter((movie) => movie.rating > 7.0);
console.log(ratingWise);

// 5.
const cars = [
  { brand: 'Toyota', year: 2018 },
  { brand: 'Honda', year: 2019 },
  { brand: 'Ford', year: 2010 },
];

const yearWise = cars.filter((car) => car.year < 2023 && car.year > 2018);
console.log(yearWise);

// 6.
const studentsGPA = [
  { name: 'Alice', gpa: 3.8 },
  { name: 'Bob', gpa: 3.2 },
  { name: 'Charlie', gpa: 3.9 },
];

const gpaWise = studentsGPA.filter((student) => student.gpa > 3.5);
console.log(gpaWise);

// 7.
const fruits = [
  { name: 'Apple', pricePerPound: 1.5 },
  { name: 'Banana', pricePerPound: 2.2 },
  { name: 'Orange', pricePerPound: 1.8 },
];

const priceWise = fruits.filter((fruit) => fruit.pricePerPound < 2.0);
console.log(priceWise);

// 8.
const employeesArray = [
  { name: 'Alice', employed: true },
  { name: 'Bob', employed: false },
  { name: 'Charlie', employed: true },
];

const employementWise = employeesArray.filter(
  (employee) => employee.employed != false
);
console.log(employementWise);

// 9.
const productsArray = [
  { name: 'Laptop', inStock: true },
  { name: 'Smartphone', inStock: false },
  { name: 'Tablet', inStock: true },
];

const stockWise = productsArray.filter((product) => product.inStock != false);
console.log(stockWise);

// 10.
const laptops = [
  { brand: 'Dell', screenSize: 14 },
  { brand: 'HP', screenSize: 15.6 },
  { brand: 'Lenovo', screenSize: 13 },
  { brand: 'Acer', screenSize: 17 },
];

const screenSizeWise = laptops.filter((laptop) => laptop.screenSize > 15);
console.log(screenSizeWise);
