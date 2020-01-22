// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const cleanStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  if (cleanStringA.length !== cleanStringB.length) {
    return false;
  }

  const mapA = {};
  const mapB = {};

  for (let char of cleanStringA) {
    if (!mapA[char]) {
      mapA[char] = 1
    }else {
      mapA[char]++
    }
  }

  for (let char of cleanStringB) {
    if (!mapB[char]) {
      mapB[char] = 1
    }else {
      mapB[char]++
    }
  }

  for (let char in mapA) {
    if (!mapB[char]) return false;
    if (mapB[char] !== mapA[char]) return false;
  }

  return true;
}

// str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
// then compare

module.exports = anagrams;
