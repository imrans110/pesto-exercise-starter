function diffArray(firstArray, secondArray) {
  const uniqFromFirstArr = firstArray.reduce((arr, item) => {
    if (secondArray.includes(item) === false) {
      return [...arr, item];
    }
    return arr;
  }, []);

  const AllUnique = secondArray.reduce((arr, item) => {
    if (firstArray.includes(item) === false) {
      return [...arr, item];
    }
    return arr;
  }, uniqFromFirstArr);

  return AllUnique;
}

export { diffArray };
