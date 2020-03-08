function addBigIntegers(intString) {
  return intString
    .split("\n")
    .map(BigInt)
    .reduce(
      (accumulatedValue, nextBigInteger) => accumulatedValue + nextBigInteger
    )
    .toString();
}

export { addBigIntegers };
