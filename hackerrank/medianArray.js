function findMedian(arr) {
  // Aim
  // in an array with an odd number of elements, find the median.
  // sort and find middle num.

  // Approach
  // sort array with sort and cb func
  // divide array length by 2 (Math.floor for decimals)
  // return integer at that index

  const sorted = arr.sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];

  //Complexity
  // time O(n log n)
  // space O(n)
}
