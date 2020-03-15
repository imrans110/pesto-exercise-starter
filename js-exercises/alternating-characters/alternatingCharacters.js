/* eslint-disable no-plusplus */
function alternatingCharacters(arr) {
  const deleteCounts = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === arr[i][j + 1]) {
        deleteCounts[i]++;
      }
    }
  }
  return deleteCounts;
}

export { alternatingCharacters };
