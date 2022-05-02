const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
   if (date === undefined) {
      throw new Error('Unable to determine the time of year!');
   }
   try {
      date.getDate
   } catch (e) {
      throw new Error('Invalid date!');
   }
   let mounth = date.getMonth();
   if (mounth === 0 || mounth === 1 || mounth === 11) {
      return 'winter';
   } else if (mounth === 2 || mounth === 3 || mounth === 4) {
      return 'spring';
   } else if (mounth === 5 || mounth === 6 || mounth === 7) {
      return 'summer';
   } else if (mounth === 8 || mounth === 9 || mounth === 10) {
      return 'autumn';
   }
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}

module.exports = {
   getSeason
};
