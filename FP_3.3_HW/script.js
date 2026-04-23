const items = [
  { id: 1, item: 'Item 1', price: 10 },
  { id: 2, item: 'Item 2', price: 20 },
  { id: 3, item: 'Item 3', price: 15 },
  { id: 4, item: 'Item 4', price: 25 },
];

const itemListContainer = document.querySelector('#itemList');
const totalCostContainer = document.querySelector('#totalCost');
const averageCostContainer = document.querySelector('#averageCost');

const itemList = items.reduce(
  (accumulator, current) => {
    accumulator.totalCost = accumulator.totalCost + current.price;

    // display the item list
    const listItem = document.createElement('li');
    listItem.textContent = `${current.item} - $${current.price}`;
    itemListContainer.appendChild(listItem);

    return accumulator;
  },
  { totalCost: 0 }
);

const total = itemList.totalCost;
const average = itemList.totalCost / items.length;

totalCostContainer.textContent = `$` + total;
averageCostContainer.textContent = `$` + average;
