// This was my awful attempt. I know the nested loops are bad for performance, but I don't think I even fully understood the problem
function twoArrays(k, A, B) {
  // Aim
  // (k will be int)
  // find if there is a possible combination of A[n] + B[n] that
  // ends up being greater than or equal to k

  // Approach (naive)
  // iterate over A
  // nested iteration over B - check sum against k
  // return string YES or NO

  let isSatisfied = "NO";
  A.forEach((num) => {
    B.forEach((bNum) => {
      if (bNum + num >= k) isSatisfied = "YES";
    });
  });
  return isSatisfied;
}

const A = [2, 1, 3];
const B = [7, 8, 9];
twoArrays(A, B);

// I guess I was missing the "greedy" approach, where you sort the two arrays, then just compare A[i] + B[i] against k
// Strangely I can't even get this one to work either though. This seems to be the approach most people take, it's just not passing hackerrank.
function twoArrays(k, A, B) {
  // Aim
  // (k will be int)
  // find if there is a possible combination of A[n] + B[n] that
  // ends up being greater than or equal to k

  // Approach (greedy)
  // sort A and B (permutate)
  // iterate over A and compare A[i] + B[i] > k
  // return string YES or NO

  let ans = "NO";
  A.sort((a, b) => a - b);
  B.sort((b, a) => a - b);
  A.forEach((x, i) => {
    if (A[i] + B[i] > k) ans = "YES";
  });
  return ans;
}
