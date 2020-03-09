const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  const MINIMUM_AMOUNT = 100000;
  return bankBalances.filter(account => account.amount > MINIMUM_AMOUNT);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(account => {
    return { ...account, rounded: Math.round(account.amount) };
  });
}

function sumOfBankBalances() {
  let unRoundedSum = bankBalances.reduce(
    (accumulator, nextAccount) => accumulator + parseFloat(nextAccount.amount),
    0
  );
  return parseFloat(unRoundedSum.toFixed(2));
}

function sumOfInterests() {
  const SELECTED_STATES = ["WI", "IL", "WY", "OH", "GA", "DE"];
  const INTEREST_MULTIPLIER = 0.189;
  let unRoundedInterest = bankBalances.reduce((accumulator, nextAccount) => {
    if (SELECTED_STATES.includes(nextAccount.state)) {
      return accumulator + nextAccount.amount * INTEREST_MULTIPLIER;
    }
    return accumulator;
  }, 0.0);
  return unRoundedInterest;
}

function higherStateSums() {
  const stateAggregatAmounts = {};
  const MINIMUM_AMOUNT = 1000000;

  for (let account of bankBalances) {
    if (stateAggregatAmounts[account.state]) {
      stateAggregatAmounts[account.state] += parseFloat(account.amount);
    } else {
      stateAggregatAmounts[account.state] = parseFloat(account.amount);
    }
  }

  const sumAmount = Object.keys(stateAggregatAmounts).reduce(
    (accumulatedAmount, state) => {
      if (stateAggregatAmounts[state] > MINIMUM_AMOUNT) {
        accumulatedAmount += stateAggregatAmounts[state];
        return accumulatedAmount;
      }
      return accumulatedAmount;
    },
    0
  );
  return sumAmount;
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
