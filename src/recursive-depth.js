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
         let k = true;
         for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
               if (k === true) {
                  depth++
               }
               getDepth(array[i]);
               k = false;
            }
         }
      }
      getDepth(arr);
      return depth;
      // remove line with error and write your code here
   }
}

module.exports = {
   DepthCalculator
};
