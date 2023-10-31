// Selection sort

// When working with arrays and linked lists,

// reading is O(1) (constant) for arrays
// and O(n) (linear) for linked lists

// writing is O(n) (linear) for arrays
// and O(1) (constant) for linked lists

// Linked lists are good for inserts/deletes, and arrays are good for random access

const inputArr = [600, 4, 44, 2, 949, 44, 31, 92, 233];

const selectionSort = (a, mutate = false) => {
  let arr = a;
  if (mutate) arr = [...a];

  // iterate over array
  for (let i = 0; i <= arr.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i; j <= arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) smallestIndex = j;
    }

    // const temp = arr[i];
    // arr[i] = arr[smallestIndex];
    // arr[smallestIndex] = temp;

    // with array destructuring
    console.log(([arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]]));
    [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
  }
  return arr;
};

console.log(selectionSort(inputArr));
console.log(inputArr);

// Complexity
// O(n^2)
