function countingSort(arr) {
  // Aim
  // input will be array with x integers
  // return frequency array with 100 elements

  // Approach
  // create new freqArr containing 100 0
  // iterate over arr and increment the correct freqArr index for each num found at that index

  const freqArr = Array.from(arr, (x) => x - x).slice(0, 100);
  arr.forEach((num) => freqArr[num]++);
  return freqArr;
}

countingSort([
  0, 2, 0, 2, 0, 0, 1, 0, 1, 2, 1, 0, 1, 1, 0, 0, 2, 0, 1, 0, 1, 2, 1, 1, 1, 3,
  0, 2, 0, 0, 2, 0, 3, 3, 1, 0, 0, 0, 0, 2, 2, 1, 1, 1, 2, 0, 2, 0, 1, 0, 1, 0,
  0, 1, 0, 0, 2, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 2, 1, 3, 2, 0, 0, 2, 1, 2, 1, 0,
  2, 2, 1, 2, 1, 2, 1, 1, 2, 2, 0, 3, 2, 1, 1, 0, 1, 1, 1, 0, 2, 2,
]);
