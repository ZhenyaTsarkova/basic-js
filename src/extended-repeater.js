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
   if (!options.hasOwnProperty('repeatTimes')) {
      options['repeatTimes'] = 1;
   }
   if (!options.hasOwnProperty('separator')) {
      options['separator'] = '+';
   }
   if (!options.hasOwnProperty('additionRepeatTimes')) {
      options['additionRepeatTimes'] = 1;
   }
   if (!options.hasOwnProperty('additionSeparator')) {
      options['additionSeparator'] = '|';
   }
   if (str === null) {
      str = 'null'
   }
   if (typeof str !== 'string') {
      str = str + '';
   }
   let result = str;
   let additionResult = '';
   if (options.hasOwnProperty('addition')) {
      if (options['addition'] === null) {
         options['addition'] = 'null'
      }
      additionResult = options['addition'] + '';
      for (let j = 1; j < options['additionRepeatTimes']; j++) {
         additionResult = additionResult + options['additionSeparator'] + options['addition'].toString();
      }
   }
   for (let i = 1; i < options['repeatTimes']; i++) {
      result = result + additionResult + options['separator'] + str.toString();
   }
   return result + additionResult;
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}

module.exports = {
   repeater
};
