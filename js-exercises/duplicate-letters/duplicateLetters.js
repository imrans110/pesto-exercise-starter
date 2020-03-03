function duplicateLetters(...args) {
  const str = args[0];
  const charCounts = {};
  for (let i = 0; i < str.length; i++) {
    if (charCounts[str[i]]) {
      charCounts[str[i]] += 1;
    } else {
      charCounts[str[i]] = 1;
    }
  }
  const maxChar = Object.keys(charCounts).reduce((a, b) =>
    charCounts[a] > charCounts[b] ? a : b
  );
  return charCounts[maxChar] > 1 ? charCounts[maxChar] : false;
}

export { duplicateLetters };
