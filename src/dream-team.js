const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
   const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
   let team = [];
   alphabet.forEach(letter => {
      if (members === null || members === undefined) { return false }
      for (let j = 0; j < members.length; j++) {
         if (typeof members[j] === 'string') {
            let k = 0;
            members[j] = members[j].replace(/\s+/g, '');
            if (members[j].slice(k, 1).toUpperCase() === letter) {
               team.push(members[j].slice(k, 1).toUpperCase());
            }
         }
      }
   })
   if (team.length > 0) {
      return team.join('');
   } else {
      return false;
   }
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}

module.exports = {
   createDreamTeam
};
