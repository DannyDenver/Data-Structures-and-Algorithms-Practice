

function reverse(str) {
  reversed = ''
  for (let char of str) {
    reversed = char + reversed;
    debugger;
  }
  return reversed;
}

reverse('adsf')
module.exports = reverse;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1
// str.split('').reverse().join('');

// for (let i = str.length; i > 0; i--) {
//   reverse = reverse + str[i-1];
// }

// 2
// let reversed = "";
//



// debugger;
// return str.split('').reduce((reversed, character) => {
//   return character + reversed;
// }, '');
