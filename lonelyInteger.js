// Given an array of integers, where all elements but one occur twice, find the unique element.

// the key to this one is the sort function with sorting method passed in to accomodate integers
function lonelyinteger(a) {
  const arr = a.sort((a, b) => a - b); // mutates - use .slice() for dupe
  let unique;
  arr.forEach((num, i) => {
    if (num !== arr[i + 1] && num !== arr[i - 1]) unique = num;
  });
  return unique;
}

console.log(lonelyInteger([1, 2, 3, 4, 4, 3, 2, 1, 4, 5, 3, 5, 9])); // should return 9
