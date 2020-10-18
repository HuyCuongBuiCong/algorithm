// Link : https://leetcode.com/problems/perfect-squares/

// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// Example 1:
// Input: n = 12
// Output: 3 
// Explanation: 12 = 4 + 4 + 4.

// Example 2:
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

/**
 * @param {number} n
 * @return {number}
 */

const memo = new Map();
var numSquares = function(n) {
    if(n <= 3) return n;
    if (memo.has(n)){
        return memo.get(n);
    }
    let result = n;
    for(let i=1; i * i <= n; i++){
        result = Math.min(result, 1 + numSquares(n - i * i));
    }
    memo.set(n,result);
    return result;
};

console.log('numSquares(12) ' + numSquares(12));
console.log('numSquares(18) ' + numSquares(18));
console.log('numSquares(16) ' + numSquares(16));
