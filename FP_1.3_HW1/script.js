const employees = [
  { id: 1, name: 'Alice', position: 'Developer' },
  { id: 2, name: 'Bob', position: 'Designer' },
  { id: 3, name: 'Charlie', position: 'Manager' },
  { id: 4, name: 'David', position: 'Tester' },
];

const employeeListDiv = document.querySelector('#employeeList');

const employeeListHTML = employees.map(
  (employee) => `
  <div>
    <strong>ID:</strong> ${employee.id}<br>
    <strong>Name:</strong> ${employee.name}<br>
    <strong>Position:</strong> ${employee.position}<br>
    <hr>
  </div>
`
);

employeeListDiv.innerHTML = employeeListHTML.join('');
