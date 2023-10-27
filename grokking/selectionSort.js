// Selection sort

// When working with arrays and linked lists,

// reading is O(1) (constant) for arrays
// and O(n) (linear) for linked lists

// writing is O(n) (linear) for arrays
// and O(1) (constant) for linked lists

// Linked lists are good for inserts/deletes, and arrays are good for random access

const inputArr = [600, 4, 44, 2, 949, 44, 31, 92, 233];

// const findSmallest = (arr) => {
//   let sm = arr[0];
//   let smIndex = 0;

//   for (i in arr) {
//     if (arr[i] < sm) {
//       sm = arr[i];
//       smIndex = i;
//     }
//   }
//   return smIndex;
// };

// // console.log(findSmallest(inputArr));

// const selectionSort = (arr) => {
//   const newArr = [];
//   arr.forEach((_a) => {
//     let sm = findSmallest(arr);
//     newArr.push(...arr.splice(sm, 1));
//   });

//   return newArr;
// };

const selectionSort = (arr) => {
  const newArr = [...arr];
  // iterate over array
  for (let i = 0; i <= newArr.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j <= newArr.length; j++) {
      if (newArr[j] < newArr[minIndex]) minIndex = j;
    }

    // const temp = newArr[i];
    // newArr[i] = newArr[minIndex];
    // newArr[minIndex] = temp;

    // with newArray destructuring
    [newArr[i], newArr[minIndex]] = [newArr[minIndex], newArr[i]];
  }
  return newArr;
};

console.log(selectionSort(inputArr));
console.log(inputArr);

// Complexity
// O(n^2)
