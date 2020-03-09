// function chunkArrayInGroups(array, chunkSize) {
//   const finalArray = array.reduce(
//     (acc, item, index) => {
//       console.log(index);
//       return index < chunkSize
//         ? [...acc, acc[0].push(item)]
//         : [...acc, acc[1].push(item)];
//     },
//     [[], []]
//   );
//   return finalArray;
// }

function chunkArrayInGroups(array, chunkSize) {
  return array.reduce((acc, _, currentIndex) => {
    const chunkBreakpoint = currentIndex % chunkSize === 0;
    if (chunkBreakpoint) {
      const arrayChunk = array.slice(currentIndex, currentIndex + chunkSize);
      return acc.concat([arrayChunk]);
    }
    return acc;
  }, []);
}

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

export { chunkArrayInGroups };
