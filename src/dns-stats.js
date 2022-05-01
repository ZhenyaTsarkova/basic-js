const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
   let stack = [];
   let obj = new Object();
   domains.forEach(el => {
      let t = el.split('.');
      for (let i = 1; i <= t.length; i++) {
         stack.push(t[t.length - i]);
      }
   })
   let keys = '';
   stack.forEach(elem => {
      if (keys.indexOf(elem) !== -1) { keys = keys }
      else { keys = keys + '.' + elem; }
      if (typeof obj[`${elem}`] === 'undefined') {
         let k = 0;
         for (let j = 0; j < stack.length; j++) {
            if (stack[j] === elem) {
               k++;
            }
         }
         obj[`${keys}`] = k;
      }
   })
   return obj;
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}

module.exports = {
   getDNSStats
};
