const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 55 },
  { name: 'Charlie', score: 75 },
];

const examResult = students.map((student) => ({
  ...student,
  passed: student.score >= 60,
}));
console.log(examResult);

const songs = [
  { title: 'Bohemian Rhapsody', duration: 367 },
  { title: 'Hotel California', duration: 420 },
  { title: 'Stairway to Heaven', duration: 482 },
];

const songDuration = songs.map((song) => ({
  title: song.title,
  duration: (song.duration / 60).toFixed(15),
}));
console.log(songDuration);

const employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 60000 },
  { name: 'Charlie', salary: 70000 },
];

const annualIncome = employees.map((employee) => ({
  ...employee,
  annualIncome: employee.salary * 12,
}));
console.log(annualIncome);

const newStudents = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 25 },
];

const ageClassification = newStudents.map((student) => ({
  ...student,
  classification: student.age >= 18 ? 'adult' : 'minor',
}));
console.log(ageClassification);

const professionals = [
  { name: 'Emily', salary: 60000 },
  { name: 'David', salary: 45000 },
  { name: 'Grace', salary: 75000 },
];

const addSignToSalary = professionals.map((employee) => ({
  name: employee.name,
  salary: '$' + employee.salary,
}));
console.log(addSignToSalary);

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Headephones', price: 50 },
  { name: 'Smartphone', price: 800 },
];

const productCategory = products.map((product) => ({
  name: product.name,
  label: product.price >= 100 ? 'expensive' : 'affordable',
}));
console.log(productCategory);

const books = [
  { title: 'The Cather in the Rye', year: 1951 },
  { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
  { title: 'The Hunger Games', year: 2008 },
];

const bookCategory = books.map((book) => ({
  title: book.title,
  category: book.year >= 2000 ? 'modern' : 'classic',
}));
console.log(bookCategory);

const developers = [
  { name: 'John', hourlyRate: 40, hoursPerWeek: 30 },
  { name: 'Lisa', hourlyRate: 50, hoursPerWeek: 35 },
  { name: 'Mike', hourlyRate: 45, hoursPerWeek: 40 },
];

const developerIncome = developers.map((developer) => ({
  name: developer.name,
  annualIncome: developer.hourlyRate * developer.hoursPerWeek * 50,
}));
console.log(developerIncome);

const salesReps = [
  { name: 'David', monthlyCommission: 8000 },
  { name: 'Helen', monthlyCommission: 10000 },
  { name: 'Ivan', monthlyCommission: 6000 },
];

const commissionIncome = salesReps.map((sales) => ({
  name: sales.name,
  annualIncome: sales.monthlyCommission * 12 + 50000,
}));
console.log(commissionIncome);

const studentsScore = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 60 },
  { name: 'Charlie', score: 92 },
];

const studentGrades = studentsScore.map((student) => ({
  name: student.name,
  grade:
    student.score >= 90
      ? 'A'
      : student.score >= 80
      ? 'B'
      : student.score >= 70
      ? 'C'
      : student.score >= 60
      ? 'D'
      : 'F',
}));
console.log(studentGrades);
