// Take 1 for example, as unsigned 32-bits is 00000000000000000000000000000001
// and doing the flipping we get 11111111111111111111111111111110 which in turn is 4294967294.

function flippingBits(n) {
  // n is integer, convert to unsigned bits
  // change 0s to 1s and vice-versa
  // returns integer, not bits.

  // because we know we won't have negative numbers, we can use Number().toString(2)
  const flippedBitString = n
    .toString(2)
    .padStart(32, 0)
    .split("")
    .map((n) => (n === "0" ? "1" : "0"));
  return parseInt(flippedBitString.join(""), 2);
}

flippedBitString(1); // return 4294967294

// I'm guessing they wanted the use of Bitwise operators (>>>, ^, |, etc) but I don't have a strong grasp of that yet.
