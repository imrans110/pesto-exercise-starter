function lastIndexOf(itemToFind, itemsArray) {
  let itemIndex = -1;
  for (let i = 0; i < itemsArray.length; i++) {
    if (itemsArray[i] === itemToFind) {
      itemIndex = i;
    }
  }
  return itemIndex;
}

export { lastIndexOf };
