const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let arr = str2.split('');
  let count = 0;
  for(let i = 0; i < str1.length; i++){
      let ind = arr.indexOf(str1[i]);
      if (ind != -1) {
          arr.splice(ind, 1);
          count++;
      }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
