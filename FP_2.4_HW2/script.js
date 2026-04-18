const items = [
  { id: 1, item: 'Item 1', status: 'In Sale' },
  { id: 2, item: 'Item 2', status: 'New Release' },
  { id: 3, item: 'Item 3', status: 'New Release' },
  { id: 4, item: 'Item 4', status: 'In Sale' },
  { id: 5, item: 'Item 5', status: 'In Sale' },
];

const inventoryListContainer = document.querySelector('#inventoryList');
const filterRadioButtons = document.getElementsByName('category');

function renderItems(selectedItem) {
  const filteredItems =
    selectedItem === 'allItems'
      ? items
      : items.filter((item) => item.status === selectedItem);

  const itemListHTML = filteredItems.map(
    (list) => `
  <li>
    <strong>ID:</strong> ${list.id}<br>
    <strong>Item:</strong> ${list.item}<br>
    <strong>Status:</strong> ${list.status}<br>
    <hr>
  </li>
  `
  );

  inventoryListContainer.innerHTML = itemListHTML.join('');
}

renderItems('allItems');

filterRadioButtons.forEach((radioBtn) => {
  radioBtn.addEventListener('change', function () {
    renderItems(this.value);
  });
});
