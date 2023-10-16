function pangrams(s) {
  // Aim
  // find all unique letters in sentence
  // see if the sentence contains all 26 unique english letters (pangram)

  // Approach
  // break string into array
  // remove duplicates
  // if length is 26
  // return pangram
  // otherwise not pangram (string)

  const letters = s
    .toLowerCase()
    .split("")
    .filter((l) => l !== " ");
  const unique = [...new Set(letters)];
  return unique.length === 26 ? "pangram" : "not pangram";
}

pangrams("We promptly judged antique ivory buckles for the next prize");
pangrams("Blah does not have all 26 letters of the english alphabet in it");

// set explanation from MDN
// Use Set() to remove duplicate elements from an array
// const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
// console.log([...new Set(numbers)]);
// [2, 3, 4, 5, 6, 7, 32]
