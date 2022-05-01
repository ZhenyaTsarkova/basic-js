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
function deleteDigit(n) {
   let stack = [];
   for (let i = 0; i < n.toString().length; i++) {
      let array = n.toString().split('');
      array.splice(i, 1);
      stack.push(array.join(''));
   }
   stack.sort();
   return Number(stack[stack.length - 1]);
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}

module.exports = {
   deleteDigit
};
