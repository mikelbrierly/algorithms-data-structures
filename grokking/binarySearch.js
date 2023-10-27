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
