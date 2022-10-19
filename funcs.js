function isFive(num) {
  // Your code here
  return num === 5
}

function isOdd(number) {
  // Your code here
  if(typeof number !== `number`) {
    throw new Error('You can only input a number');
  }

  if(number % 2 === 0) {
    return false
  } else {
  return true}
}

function myRange(min, max, step = 1) {
  // Your code here
  let arr = []
  for(let i = min; i <= max; i += step) {
        arr.push(i)
  }
  return arr
}


module.exports = { isFive, isOdd, myRange };
