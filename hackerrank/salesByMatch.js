function sockMerchant(n, ar) {
  // Aim
  // find pairs in arr, ignore leftover nums
  // return number of pairs

  // Approach
  // iterate over ar
  // use hashmap to store and increment intances of each item
  //  { 1: 3, 2: 1 }
  // after iterating, return values (if odd, subtract 1) modulo 2 to find pairs, increment pair counter
  let pairs = 0;
  let instanceCounter = {};

  ar.forEach((item) => {
    if (instanceCounter[item]) return instanceCounter[item]++;
    instanceCounter[item] = 1;
  });
  for (const key in instanceCounter) {
    if (instanceCounter[key] % 2 !== 0) instanceCounter[key]--;
    pairs += instanceCounter[key] / 2;
  }
  return pairs;

  // Complexity
  // iterate ar O(n) (worst case)
  // iterate instanceCounter O(log n)
  // O(n)
}
