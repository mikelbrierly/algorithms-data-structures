const sampleArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function diagonalDifference(arr) {
  // Matrix will be square
  // find top left to right diag sum (1, 5, 9)
  // find top right to left diag sum (3, 5, 7)
  // return absolute diff between those nums

  const leftCollector = [];
  const rightCollector = [];
  let lIndex = 0;
  let rIndex = arr[0].length - 1;
  // iterate over all arrays
  for (const a of arr) {
    leftCollector.push(a[lIndex]);
    rightCollector.push(a[rIndex]);
    lIndex++;
    rIndex--;
  }

  return Math.abs(
    leftCollector.reduce((a, b) => a + b) -
      rightCollector.reduce((a, b) => a + b)
  );
}

diagonalDifference(sampleArr);
