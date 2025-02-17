const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
   let newMatrix = [];
   for (let i = 0; i < matrix.length; i++) {
      let stack = [];
      for (let j = 0; j < matrix[i].length; j++) {
         stack.push(0);
      }
      newMatrix.push(stack);
   }
   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
         if (matrix[i][j] === true) {
            if (i !== 0) {
               newMatrix[i - 1][j]++;
               if (j !== 0) {
                  newMatrix[i - 1][j - 1]++;
               }
               if (j !== matrix[i].length - 1) {
                  newMatrix[i - 1][j + 1]++;
               }
            }
            if (i !== matrix.length - 1) {
               newMatrix[i + 1][j]++;
               if (j !== 0) {
                  newMatrix[i + 1][j - 1]++;
               }
               if (j !== matrix[i].length - 1) {
                  newMatrix[i + 1][j + 1]++;
               }
            }
            if (j !== 0) {
               newMatrix[i][j - 1]++;
            }
            if (j !== matrix[i].length - 1) {
               newMatrix[i][j + 1]++;
            }
         }
      }
   }
   return newMatrix;
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}

module.exports = {
   minesweeper
};
