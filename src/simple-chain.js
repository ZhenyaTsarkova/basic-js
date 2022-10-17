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
   },
   addLink(value) {
      if (value === null) {
         stack.push('null')
      } else if (value === 0) {
         stack.push('0')
      } else if (!value) {
         stack.push('')
      }
      else {
         value = value + '';
         stack.push(value);
      }
      return chainMaker;
   },
   removeLink(position) {
      if (position !== Number(position) || !stack[position]) { err === "You can't remove incorrect link!" }
      else { stack.splice(position - 1, 1) }
      return chainMaker;
   },
   reverseChain() {
      stack.reverse();
      return chainMaker;
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
   }
};

module.exports = {
   chainMaker
};
