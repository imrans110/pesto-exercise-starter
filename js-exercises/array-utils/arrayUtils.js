const map = (arr, fn) => {
  const mapArray = [];
  for (let index = 0; index < arr.length; index++) {
    mapArray.push(fn(arr[index], index, arr));
  }
  return mapArray;
};

const filter = (arr, fn) => {
  const filteredArray = [];
  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index])) {
      filteredArray.push(arr[index]);
    }
  }
  return filteredArray;
};

const reduce = (arr, fn, accumulatedValue = 0) => {
  for (let index = 0; index < arr.length; index++) {
    accumulatedValue = fn(accumulatedValue, arr[index]);
  }
  return accumulatedValue;
};

const forEach = (arr, fn) => {
  for (let index = 0; index < arr.length; index++) {
    arr[index] = fn(arr[index]);
  }
  return arr;
};

export { forEach, map, filter, reduce };
