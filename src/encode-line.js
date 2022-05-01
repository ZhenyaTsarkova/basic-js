const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
   let result = '';
   let j = 0;
   for (let i = 0; i < str.length; i = j) {
      j++;
      let k = 1;
      while (str[j] === str[j - 1]) {
         k++
         j++
      }
      if (k > 1) { result = result + k.toString() + str[i] }
      else { result = result + str[i] }
   }
   return result
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}

module.exports = {
   encodeLine
};
