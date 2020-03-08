function rot13(encodedString) {
  const ROT_13_VALUE = 13;
  const LOWER_BOUND_CHAR_ASCII = 65;
  const UPPER_BOUND_CHAR_ASCII = 90;

  let decodedString = "";

  for (let char of encodedString) {
    const charASCIIValue = char.charCodeAt(0);
    if (
      charASCIIValue >= LOWER_BOUND_CHAR_ASCII &&
      charASCIIValue < UPPER_BOUND_CHAR_ASCII + 1
    ) {
      if (charASCIIValue + ROT_13_VALUE > UPPER_BOUND_CHAR_ASCII) {
        const ASCIIValueDifference =
          UPPER_BOUND_CHAR_ASCII - charASCIIValue + 1;
        decodedString += String.fromCharCode(
          ROT_13_VALUE - ASCIIValueDifference + LOWER_BOUND_CHAR_ASCII
        );
      } else {
        decodedString += String.fromCharCode(charASCIIValue + ROT_13_VALUE);
      }
    } else {
      decodedString += String.fromCharCode(charASCIIValue);
    }
  }
  return decodedString;
}

export { rot13 };
