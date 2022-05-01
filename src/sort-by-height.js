const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
   let newArr = [];
   let stack = [];
   let index = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) {
         index.push(i);
      } else {
         stack.push(arr[i]);
      }
   }
   stack.sort((a, b) => a - b);
   let j = 0;
   for (let i = 0; i < arr.length; i++) {
      if (index.includes(i)) {
         newArr.push(-1);
      } else {
         newArr.push(stack[j]);
         j++;
      }
   }
   return newArr;
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}

module.exports = {
   sortByHeight
};
