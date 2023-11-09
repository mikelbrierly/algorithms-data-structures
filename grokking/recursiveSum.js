const nums = [11, 4, 3, 23, 445, 5];

// Base case - [] or [4] (one element)
const recursiveSum = (arr) => {
  if (arr.length === 0) return 0; // base case
  return arr[0] + recursiveSum(arr.slice(1));
};

console.log(recursiveSum(nums));
