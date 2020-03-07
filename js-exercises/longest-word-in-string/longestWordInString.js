function longestWordInString(...args) {
  const wordsInString = args[0].split(" ");

  const longestWord = wordsInString.reduce((accumulatedWord, word) =>
    accumulatedWord.length > word.length ? accumulatedWord : word
  );

  return longestWord.length;
}

export { longestWordInString };
