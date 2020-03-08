const shiftStringByOnePlace = str => {
  return str.slice(1) + str.charAt(0);
};

const rotatedString = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length - 1; i++) {
    let shiftedString = shiftStringByOnePlace(str2);
    if (str1 === shiftedString) {
      return true;
    }
    str2 = shiftedString;
  }
  return false;
};

export { rotatedString };
