const sumEvenArgs = (...args) => {
  const evenSum = args.reduce((accumulator, nextNum) => {
    return nextNum % 2 === 0 ? accumulator + nextNum : accumulator;
  }, 0);
  return evenSum;
};

export { sumEvenArgs };
