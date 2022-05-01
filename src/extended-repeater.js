const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = String(str);

  if(!(options.addition === undefined)) result += options.addition;

  for(let i = 1; i<= options.additionRepeatTimes-1; i++){
    if(!options.additionSeparator) {
      result += '|' + options.addition;
    } else {
      result += options.additionSeparator+options.addition;
    }
  }

  let repeatingCtring = result;

  for(let i = 1; i<= options.repeatTimes-1;i++){
    if(!options.separator) {
      result += '+' + repeatingCtring;
    } else {
      result += options.separator + repeatingCtring;
    }
  }
  return result;
}

module.exports = {
  repeater
};
