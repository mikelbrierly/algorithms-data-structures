function birthday(s, d, m) {
  // Aim
  // contiguous length matches birth month
  // sum of all selected sums to birth day
  // find how MANY ways the array can be divided

  // Approach (naive)
  // create counter for ways bay can be divided set to 0
  // Iterate over array and reduce the current index + m to see if equals d
  // if it does, increment counter
  // return counter

  let counter = 0;
  s.forEach((num, i) => {
    // example input
    // s = [1, 2, 3], d = 3, m = 2
    const segment = s.slice(i, i + m); // use slice instead of splice to not alter original array. This tripped me up at first. (i guess spreading still didn't prevent this)
    if (segment.reduce((a, b) => a + b) === d) counter++;
  });
  return counter;

  // Time complexity
  // iterate over all elements
  // but reduce is a nested loop - O(n^2)

  // Space complexity
  // store counter O(1)
}
