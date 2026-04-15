const tasks = [
  { id: 1, title: 'Task 1', status: 'To-Do' },
  { id: 2, title: 'Task 2', status: 'In Progress' },
  { id: 3, title: 'Task 3', status: 'Completed' },
  { id: 4, title: 'Task 4', status: 'To-Do' },
];

const taskListContainer = document.querySelector('#taskList');
const listByStatus = document.querySelector('#listByStatus');

function renderTasks(statusWise) {
  const filteredTasks =
    statusWise === 'All'
      ? tasks
      : tasks.filter((task) => task.status === statusWise);
  const taskListHTML = filteredTasks.map(
    (task) => `
  <li>
    <strong>ID: </strong> ${task.id}<br>
    <strong>Title: </strong> ${task.title}<br>
    <strong>Status: </strong> ${task.status}<br>
    <hr>
  </li>
`
  );

  taskListContainer.innerHTML = taskListHTML.join('');
}

renderTasks('All');

listByStatus.addEventListener('change', function () {
  renderTasks(listByStatus.value);
});
