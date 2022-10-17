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
   if (!names) {
      throw new NotImplementedError('Not implemented');
   }
   let stack = [];
   let obj = {};
   if (names.length) {
      obj[names[0]] = 1;
      stack.push(names[0]);
   }

   for (let i = 1; i < names.length; i++) {
      if (!stack.includes(names[i])) {
         stack.push(names[i]);
         obj[names[i]] = 1;
      } else {
         for (key in obj) {
            if (key === names[i]) {
               obj[key]++;
               stack.push(key + '(' + (obj[key] - 1) + ')');
               obj[key + '(' + (obj[key] - 1) + ')'] = 1;
               break
            }
         }
      }
   }
   return stack;
}
// remove line with error and write your code here

module.exports = {
   renameFiles
};
