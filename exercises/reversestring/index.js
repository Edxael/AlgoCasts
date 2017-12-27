// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reverse().join("")
}



  // Using a For loop
function reverse(str) {

  const arr = []
  for(let x = str.length; x >= 0; x--){
    arr.push(str[x])
  }

  return arr.join("")
}


// Using the ES5 For Loops
function reverse(str) {

  let reversed = ''
  for(let character of str){
    reversed = character + reversed
  }

  return reversed

}


module.exports = reverse;
