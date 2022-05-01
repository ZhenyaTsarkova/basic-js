const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
   let stack = [];
   stack.push(names[0]);
   function getSuffix(name) {
      for (let i = 1; i < names.length; i++) {
         if (!stack.includes(`${name}(${i})`)) { stack.push(`${names[1]}(${i})`); }
      }
   }
   for (let j = 0; j < names.length; j++) {
      if (stack.includes(names[j])) {
         getSuffix(names[j]);
      }
   }
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}

module.exports = {
   renameFiles
};
