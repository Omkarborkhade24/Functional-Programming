console.log('1.');
const smartphones = [
  { brand: 'iPhone', year: 2019, cameraResolution: 12.2 },
  { brand: 'Samsang', year: 2021, cameraResolution: 13 },
  { brand: 'Google Pixel', year: 2018, cameraResolution: 11 },
];

const yearAndCameraWise = smartphones.filter(
  (phone) => phone.year > 2020 && phone.cameraResolution > 12
);
console.log(yearAndCameraWise);

console.log('---- ---- ----');

console.log('2.');

const books = [
  { title: 'The Da VInci Code', year: 2003, pages: 454 },
  { title: 'The Alchemist', year: 1988, pages: 197 },
  { title: 'The Hunger Games', year: 2008, pages: 374 },
];

const publicationAndPageWise = books.filter(
  (book) => book.year > 2005 && book.pages < 400
);
console.log(publicationAndPageWise);
console.log('---- ---- ----');

console.log('3.');

const students = [
  { name: 'Alice', age: 20, gpa: 3.8 },
  { name: 'Bob', age: 17, gpa: 3.2 },
  { name: 'Charlie', age: 19, gpa: 3.9 },
];

const ageAndGpaWise = students.filter(
  (student) => student.age > 18 && student.gpa > 3.5
);
console.log(ageAndGpaWise);
console.log('---- ---- ----');

console.log('4.');

const employees = [
  { name: 'Emily', salary: 55000, hireYear: 2008 },
  { name: 'David', salary: 48000, hireYear: 2012 },
  { name: 'Grace', salary: 60000, hireYear: 2006 },
];

const salaryAndExperienceWise = employees.filter(
  (employee) => employee.salary > 50000 && employee.hireYear > 2010
);
console.log(salaryAndExperienceWise);
console.log('---- ---- ----');

console.log('5.');

const products = [
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Headphones', price: 50, inStock: false },
  { name: 'Smartphones', price: 800, inStock: true },
];

const priceAndAvailabillityWise = products.filter(
  (product) => product.price > 100 && product.inStock === true
);
console.log(priceAndAvailabillityWise);
console.log('---- ---- ----');

console.log('6.');

const movies = [
  { title: 'Inception', year: 2010, rating: 8.8, genre: 'Sci-Fi' },
  { title: 'The Dark Knight', year: 2008, rating: 9.0, genre: 'Action' },
  { title: 'Avatar', year: 2009, rating: 7.8, genre: 'Adventure' },
  { title: 'The Dune', year: 2018, rating: 6.0, genre: 'Action' },
];

const yearAndRatingAndGenreWise = movies.filter(
  (movie) => movie.year > 2010 && movie.rating > 8.0 && movie.genre === 'Action'
);

console.log(yearAndRatingAndGenreWise);
console.log('---- ---- ----');

console.log('7.');

const apartments = [
  { location: 'Downtown', price: 1600, bedrooms: 2, safeNeighbourhood: true },
  { location: 'Suburb', price: 1400, bedrooms: 1, safeNeighbourhood: false },
  {
    location: 'City Center',
    price: 1800,
    bedrooms: 3,
    safeNeighbourhood: true,
  },
];

const priceAndSecurityAndAreaWise = apartments.filter(
  (house) =>
    house.price > 1500 &&
    house.safeNeighbourhood === true &&
    house.bedrooms >= 2
);

console.log(priceAndSecurityAndAreaWise);
console.log('---- ---- ----');

console.log('8.');

const items = [
  {
    name: 'Laptop',
    price: 800,
    onlineAvailability: true,
    category: 'Electronics',
  },
  {
    name: 'Book',
    price: 20,
    onlineAvailability: false,
    category: 'Literature',
  },
  { name: 'Book', price: 40, onlineAvailability: false, category: 'Classic' },
  {
    name: 'Headphones',
    price: 60,
    onlineAvailability: true,
    category: 'Electronics',
  },
];

const priceAndMarketAndCategoryWise = items.filter(
  (item) =>
    item.price > 50 &&
    item.onlineAvailability === true &&
    item.category === 'Electronics'
);
console.log(priceAndMarketAndCategoryWise);

console.log('---- ---- ----');

console.log('9.');

const jobApplicants = [
  {
    name: 'Alice',
    experienceYears: 4,
    englishProficiency: true,
    relevantDegree: true,
  },
  {
    name: 'Bob',
    experienceYears: 2,
    englishProficiency: false,
    relevantDegree: true,
  },
  {
    name: 'Charlie',
    experienceYears: 5,
    englishProficiency: true,
    relevantDegree: false,
  },
];

const experienceAndProficiencyAndDegreeWise = jobApplicants.filter(
  (candidate) =>
    candidate.experienceYears >= 3 &&
    candidate.englishProficiency === true &&
    candidate.relevantDegree === true
);

console.log(experienceAndProficiencyAndDegreeWise);
console.log('---- ---- ----');

console.log('10.');

const restaurants = [
  {
    name: 'Gourmet Grill',
    stars: 4.5,
    vegetarianOptions: true,
    location: 'City',
  },
  {
    name: 'Fast Noodles',
    stars: 3.8,
    vegetarianOptions: false,
    location: 'Suburb',
  },
  {
    name: 'Healthy Bites',
    stars: 4.2,
    vegetarianOptions: true,
    location: 'City',
  },
  {
    name: 'Chat Street',
    stars: 3.5,
    vegetarianOptions: false,
    location: 'Suburb',
  },
];

const ratingAndMealTypeAndLocationWise = restaurants.filter(
  (eatery) =>
    eatery.stars > 4 &&
    eatery.vegetarianOptions === true &&
    eatery.location === 'City'
);
console.log(ratingAndMealTypeAndLocationWise);

const goodBooks = [
  { title: 'The Da Vinci Code', year: 2003, rating: 8.6, genre: 'Mystery' },
  { title: 'To Kill a Mockingbird', year: 1960, rating: 8.3, genre: 'Drama' },
  { title: 'Gone Girl', year: 2012, rating: 9.0, genre: 'Thriller' },
];

const yearsAndRatingAndGenreWise = goodBooks.filter(
  (book) => book.year > 2000 && book.rating >= 7.5 && book.genre !== 'Drama'
);
console.log(yearsAndRatingAndGenreWise);

const employeesArray = [
  {
    name: 'David',
    experienceYears: 6,
    englishProficiency: true,
    department: 'Engineering',
  },
  {
    name: 'Emma',
    experienceYears: 4,
    englishProficiency: false,
    department: 'Finance',
  },
  {
    name: 'Alex',
    experienceYears: 7,
    englishProficiency: true,
    department: 'Marketing',
  },
];

const experienceAndProficiencyAndDomain = employeesArray.filter(
  (employee) =>
    employee.experienceYears > 5 &&
    employee.englishProficiency === true &&
    employee.department !== 'Finance'
);
console.log(experienceAndProficiencyAndDomain);
console.log('---- ---- ----');
