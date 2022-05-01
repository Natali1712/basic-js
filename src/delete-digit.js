const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let max = 0;
  for(let i=0; i<String(num).length; i++) {
      let arr = String(num).split('');
      arr.splice(i, 1);
      let splicedNum = +arr.join('');
      max = (splicedNum>max)? splicedNum:max;
      console.log(splicedNum);
  }
  return max;
}
module.exports = {
  deleteDigit
};
