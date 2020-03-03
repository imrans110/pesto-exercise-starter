function sumAll(numArray) {
  if (numArray[0] > numArray[1]) {
    let temp;
    temp = numArray[1];
    numArray[1] = numArray[0];
    numArray[0] = temp;
  }
  let sum = numArray[0] + numArray[1];
  for (let i = numArray[0] + 1; i < numArray[1]; i++) {
    sum += i;
  }
  return sum;
}

export { sumAll };
