/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    accountsSum = accounts.map(item => item.reduce((sum,elem) => sum =sum+elem,0) )
    return Math.max(...accountsSum)
};
