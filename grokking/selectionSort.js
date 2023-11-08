// Selection sort

// When working with arrays and linked lists,

// reading is O(1) (constant) for arrays
// and O(n) (linear) for linked lists

// writing is O(n) (linear) for arrays
// and O(1) (constant) for linked lists

// Linked lists are good for inserts/deletes, and arrays are good for random access

const inputArr = [600, 4, 44, 2, 949, 44, 31, 92, 233];

const findSmallest = (arr) => {
  let smallest = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];
  }
  return arr.indexOf(smallest);
};

const selectionSort = (arr, newArr = []) => {
  const smallest = findSmallest(arr);
  newArr.push(...arr.splice(smallest, 1));
  if (arr.length !== 0) selectionSort(arr, newArr);
  return newArr;
};

console.log(selectionSort(inputArr));

// Complexity
// O(n^2)
