console.log('FP3.2_HW1');
console.log('---- ---- ----');

const data = [
  { key: 'item', value: 'Pencil' },
  { key: 'price', value: 250 },
  { key: 'inStock', value: true },
];

const transformedData = data.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedData);

console.log('---- ---- ----');

const students = [
  { item: 'Pen', color: 'blue' },
  { item: 'Pen', color: 'black' },
  { item: 'Pen', color: 'red' },
];

const transformedStudents = students.reduce((acc, curr) => {
  acc.push(curr.color);
  return acc;
}, []);

console.log(transformedStudents);

console.log('---- ---- ----');

const countries = [
  { item: 'Car', manifacturingCity: 'New York' },
  { item: 'Car', manifacturingCity: 'Los Angeles' },
  { item: 'Car', manifacturingCity: 'Chicago' },
];

const transformedCountries = countries.reduce((acc, curr) => {
  acc.push(curr.manifacturingCity);
  return acc;
}, []);

console.log(transformedCountries);

console.log('---- ---- ----');

const groceryItems = [
  { item: 'Fruit', name: 'Apple' },
  { item: 'Fruit', name: 'Banana' },
  { item: 'Fruit', name: 'Orange' },
];

const transformedGrocery = groceryItems.reduce((acc, curr) => {
  acc.push(curr.name);
  return acc;
}, []);

console.log(transformedGrocery);

console.log('---- ---- ----');

const details = [
  { key: 'Category', value: 'Electronics' },
  { key: 'rating', value: 4.5 },
  { key: 'available', value: true },
];

const transformedDetails = details.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedDetails);
