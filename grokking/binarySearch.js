// Binary Search

// Binary search is an algorithm that takes a SORTED input and returns the LOCATION
// of the item being searched for. (works like git bisect)

// 'Binary' because it's either this side of the array or the other side of the array. One or the other.

const arr = [1, 2, 3, 5, 6, 9, 100];

const binarySearch = (sorted, item) => {
  let low = 0;
  let high = sorted.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let guess = sorted[mid];

    if (guess === item) return mid;
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};

console.log(binarySearch(arr, 3));

// Complexity
// 0(log n);

// recursive and base case -
const binarySearchRecursive = (sortedArr, target) => {
  console.log(sortedArr);
  console.log(sortedArr.length);
  // base case
  if (sortedArr.length < 2) return sortedArr;

  const low = 0;
  const high = sortedArr.length - 1;
  const mid = Math.floor((low + high) / 2);

  if (sortedArr[mid] === target) return mid;

  //recursive case
  // console.log(sortedArr.slice(mid, sortedArr.length), target)
  if (sortedArr[mid] > target) {
    return binarySearchRecursive(sortedArr.slice(0, mid), target);
  }
  return binarySearchRecursive(sortedArr.slice(mid), target);
};

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 11));
