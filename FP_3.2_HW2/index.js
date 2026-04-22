console.log('FP3.2_HW2');
console.log('---- ---- ----');

const productInfo = [
  { key: 'name', value: 'Laptop' },
  { key: 'price', value: 12000 },
  { key: 'brand', value: 'Dell' },
];

const transformedProduct = productInfo.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedProduct);

console.log('---- ---- ----');

const colleges = [
  { item: 'Book', university: 'Harvard' },
  { item: 'Book', university: 'MIT' },
  { item: 'Book', university: 'Stanford' },
];

const transformedColleges = colleges.reduce((acc, curr) => {
  acc.push(curr.university);
  return acc;
}, []);

console.log(transformedColleges);

console.log('---- ---- ----');

const userPreferences = [
  { key: 'theme', value: 'Dark Mode' },
  { key: 'fontSize', value: 16 },
  { key: 'notifications', value: true },
];

const transformedUserPr = userPreferences.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedUserPr);

console.log('---- ---- ----');

const continents = [
  { key: 'Asia', country: 'India' },
  { key: 'Europe', country: 'France' },
  { key: 'North America', country: 'USA' },
];

const transformedCont = continents.reduce((acc, curr) => {
  acc[curr.key] = curr.country;
  return acc;
}, {});

console.log(transformedCont);

console.log('---- ---- ----');

const information = [
  { key: 'city', value: 'New York' },
  { key: 'population', value: 8398748 },
  { key: 'area', value: 468.9 },
];

const transformedInfo = information.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedInfo);
