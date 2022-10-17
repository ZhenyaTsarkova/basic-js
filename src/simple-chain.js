const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let stack = [];
let err = '';

const chainMaker = {
   getLength() {
      return stack.length;
      // remove line with error and write your code here
   },
   addLink(value) {
      if (!value) {
         stack.push('')
      } else {
         value = value + '';
         stack.push(value);
      }
      // remove line with error and write your code here
   },
   removeLink(position) {
      if (position !== Number(position) || !stack[position]) { err === "You can't remove incorrect link!" }
      else { stack.splice(position, 1) }
      // remove line with error and write your code here
   },
   reverseChain() {
      stack.reverse();
      // remove line with error and write your code here
   },
   finishChain() {
      if (err === "You can't remove incorrect link!") {
         throw new Error("You can't remove incorrect link!")
      } else {
         for (let i = 0; i < stack.length; i++) {
            stack[i] = '( ' + stack[i] + ' )';
         }
         return stack.join('~~');
      }
      // remove line with error and write your code here
   }
};

module.exports = {
   chainMaker
};
