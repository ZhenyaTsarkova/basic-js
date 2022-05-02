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
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
   },
   addLink(value) {
      value = value + '';
      stack.push(value);
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
   },
   removeLink(position) {
      if (position !== Math.floor(position) || !stack[position]) {err = "You can't remove incorrect link!"}
      else {stack.splice(position,1)}
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
   },
   reverseChain() {
      stack.reverse();
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
   },
   finishChain() {
      if (err === "You can't remove incorrect link!") {
         return err;
      } else {
         for (let i = 0; i < stack.length; i++) {
            stack[i] = '( ' + stack[i] + ' )';
         }
         return stack.join('~~');
      }
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
   }
};

module.exports = {
   chainMaker
};
