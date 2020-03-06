function fibonacci(num) {
  let secondNum = 1,
    firstNum = 0,
    temp;

  while (num >= 0) {
    temp = secondNum;
    secondNum += firstNum;
    firstNum = temp;
    num--;
  }

  return firstNum;
}

function sumFibs(num) {
  const fibonacciArr = [1];
  let fibonacciNumber = 1;
  while (fibonacciArr[fibonacciArr.length - 1] < num) {
    fibonacciArr.push(fibonacci(fibonacciNumber));
    fibonacciNumber++;
  }
  const oddValues = fibonacciArr.filter(
    value => value % 2 !== 0 && value <= num
  );
  const oddValuesSum = oddValues.reduce((sum, value) => sum + value);
  return oddValuesSum;
}

export { sumFibs };
