// Link: https://leetcode.com/problems/reverse-integer/
// Given a 32-bit signed integer, reverse digits of an integer.
//
//     Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
//
//
//
//     Example 1:
//
// Input: x = 123
// Output: 321
// Example 2:
//
// Input: x = -123
// Output: -321
// Example 3:
//
// Input: x = 120
// Output: 21
// Example 4:
//
// Input: x = 0
// Output: 0

var reverse = function(x) {
    const isNegativeNumber = Math.sign(x) == -1;
    let  positiveNumber = isNegativeNumber ? x * -1 : x;
    let reservedNumber = 0;
    let remainder = 0;
    let quotient = positiveNumber;
    while(quotient > 0) {
        remainder = quotient % 10;
        quotient = Math.floor(quotient /10);
        reservedNumber = reservedNumber * 10 + remainder;
    }

    if (isNegativeNumber){
        reservedNumber = reservedNumber * -1;
    }
    if (reservedNumber > (2 ** 31 - 1) || reservedNumber < ((-2) ** 31 ) ) {
        return 0;
    }
    return reservedNumber;
};

console.log(reverse(-123));

