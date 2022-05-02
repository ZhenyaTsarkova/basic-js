const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
   calculateDepth(arr) {
      let stack = [];
      let depth = 1;
      function getDepth(array) {
         for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
               depth++;
               getDepth(array[i]);
            } else {
               stack.push(depth);
               depth = 1;
            }
         }
      }
      getDepth(arr);
      stack.sort();
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
   }
}

module.exports = {
   DepthCalculator
};
