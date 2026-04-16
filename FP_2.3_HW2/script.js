const employeeData = [
  { id: 1, name: 'Alice', experienceInYears: 2 },
  { id: 2, name: 'Bob', experienceInYears: 9 },
  { id: 3, name: 'Charlie', experienceInYears: 4 },
  { id: 4, name: 'John', experienceInYears: 19 },
];

const empListContainer = document.querySelector('#empList');
const expCheck = document.querySelector('#expCheck');

function renderEmployees(expCheck) {
  const filteredEmp = expCheck
    ? employeeData.filter((employee) => employee.experienceInYears > 5)
    : employeeData;

  const empListHTML = filteredEmp.map(
    (employee) => `
  <li>
  <strong>ID: </strong> ${employee.id}<br>
  <strong>Name: </strong> ${employee.name}<br>
  <strong>Experience: </strong> ${employee.experienceInYears}<br>
  </li>
  <hr>`
  );

  empListContainer.innerHTML = empListHTML.join('');
}

renderEmployees(false);

expCheck.addEventListener('change', function () {
  renderEmployees(expCheck.checked);
});
