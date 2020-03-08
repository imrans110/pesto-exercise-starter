function updateInventory(existingInventory, incomingInventory) {
  const itemsQuantity = {};
  for (let item of existingInventory) {
    if (itemsQuantity[item[1]]) {
      itemsQuantity[item[1]] += item[0];
    } else {
      itemsQuantity[item[1]] = item[0];
    }
  }

  for (let item of incomingInventory) {
    if (itemsQuantity[item[1]]) {
      itemsQuantity[item[1]] += item[0];
    } else {
      itemsQuantity[item[1]] = item[0];
    }
  }

  const updatedInventory = objectToArray(itemsQuantity);
  const updatedInventorySorted = updatedInventory.sort((a, b) =>
    a[1] > b[1] ? 1 : -1
  );
  return updatedInventorySorted;
}

const objectToArray = obj => {
  return Object.keys(obj).map(key => [obj[key], key]);
};

export { updateInventory };
