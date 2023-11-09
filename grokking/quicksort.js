// quicksort is an efficient sorting algorith that uses recursion and the "divide and conquer" method of problem solving.
// a key concept is thinking about the base case to stop recursion, and the fact that NONE of the recursive calls resolve until the base case is met.
// Then they all start to resolve very quickly. Reminds me of that video of those brick layers with the domino trick. - https://www.youtube.com/watch?v=-BTWiZ7CYoI

const quicksort = (arr) => {
  const a = arr.slice();
  if (a.length < 2) return a;

  // set pivot to center
  // const middle = Math.floor(a.length / 2);
  // const pivot = a.splice(middle, 1)[0];

  // set pivot to random (slightly better perf)
  const random = Math.floor(Math.random() * a.length);
  const pivot = a.splice(random, 1)[0];

  // split at pivot by greater and less than
  const less = a.filter((x) => x <= pivot);
  const more = a.filter((x) => x > pivot);

  // pass both to quicksort and join result
  return [...quicksort(less), pivot, ...quicksort(more)];
};

console.log(quicksort([4, 2, 3, 4, 7, 1, 3, 4, 5, 6, 7, 8, 9]));

// Complexity
// O(n log n)
