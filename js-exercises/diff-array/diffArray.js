function diffArray(firstArray, secondArray) {
  const firstUnique = firstArray.reduce((acc, el) => {
    if (secondArray.indexOf(el) === -1) {
      return [...acc, el];
    }
    return acc;
  }, []);

  const secondUnique = secondArray.reduce((acc, el) => {z
    if (firstArray.indexOf(el) === -1) {
      return [...acc, el];
    }
    return acc;
  }, []);

  return firstUnique.concat(secondUnique);
}

export {
  diffArray,
};
