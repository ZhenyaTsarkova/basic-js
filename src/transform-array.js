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
   let stack = [];
   if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
   }
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
         if (arr[i + 1] !== undefined) {
            i++;
         }
      } else if (arr[i] === '--discard-prev') {
         if (arr[i - 2] !== '--discard-next' && arr[i - 1] !== undefined) {
            stack.pop();
         }
      } else if (arr[i] === '--double-next') {
         if (arr[i + 1] !== undefined) {
            stack.push(arr[i + 1]);
         }
      } else if (arr[i] === '--double-prev') {
         if (arr[i - 2] !== '--discard-next' && arr[i - 1] !== undefined) {
            stack.push(stack[stack.length - 1]);
         }
      } else {
         stack.push(arr[i]);
      }
   }
   return stack;
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}

module.exports = {
   transform
};
