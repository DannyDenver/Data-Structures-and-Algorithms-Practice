// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if(chars[char]) {
      chars[char]++;
    }else {
      chars[char] = 1;
    }

    if (chars[char] > max) {
      maxChar = char;
      max = chars[char];
    }
  }

  console.log(chars)

  return maxChar;
}

maxChar('Hello There!')

module.exports = maxChar;
