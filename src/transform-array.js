const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw Error( "'arr' parameter must be an instance of the Array!");
  let res = [];
  let buffer = [...arr];
  for (let i = 0; i < buffer.length; i++) {
    switch (buffer[i]) {
      case '--double-next':
        (buffer[i + 1]) ? res.push(buffer[i + 1]) : null;
        break;
      case '--double-prev':
        (buffer[i - 1]) ? res.push(buffer[i - 1]) : null;
        break;
      case '--discard-next':
        buffer.splice(i + 1, 1);
        i++;
        break;
      case '--discard-prev':
        res.pop();
        break;
      default:
        res.push(buffer[i]);
        break;
    }
  }
  return res;
}

module.exports = {
  transform
};
