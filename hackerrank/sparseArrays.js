// A sparse array is an array that includes undefined or null

let strings = ["ab", "abc", "ab"];
let query = [123, "ab", "abc", "zz", "aa", "bb"];

function matchingStrings(strings, queries) {
  // // Aim
  // // if given strings ['ab', 'abc', 'ab']
  // // with the query ['ab', 'abc', 'zz', 'aa', 'bb']
  // // return [2, 1, 0, 0, 0]

  // // Hashmap to reduce complexity from 0(n2) with nested loop to 0(n) (linear 1:1 progression, not exponential)
  // const searchMap = {};
  // queries.forEach((query) => {
  //   searchMap[query] = 0; // adds space complexity(?)
  // });

  // // if the string array (searchMap) contains the the queried string, increment it in the searchMap
  // strings.forEach((string) => {
  //   // prevent NaN from being added to results
  //   if (searchMap[string] !== undefined) searchMap[string]++;
  // });

  // // return all searchMap values in array
  // // console.log(Object.values(searchMap));
  // return Object.values(searchMap);

  // refactored way better (from glitched failure YT)
  const searchMap = {};
  strings.forEach(
    (string) => (searchMap[string] = (searchMap[string] || 0) + 1)
  );
  return queries.map((query) => searchMap[query] || 0);
}

matchingStrings(strings, query);
