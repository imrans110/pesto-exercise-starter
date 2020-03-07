// const isString = require("util").isString;
import { isString } from "util";

function abbreviateString(str) {
  if (!isString(str)) {
    throw new Error(`Expected a string in parameter.`);
  }

  const wordsInArray = str.split(" ");
  const abbrevatedWord = wordsInArray[0];
  const abbrevatedLetter = wordsInArray[wordsInArray.length - 1]
    .split("")[0]
    .toUpperCase();

  return `${abbrevatedWord} ${abbrevatedLetter}.`;
}

export { abbreviateString };
