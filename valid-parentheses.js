// Link
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//     An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//
//
//     Example 1:
//
// Input: s = "()"
// Output: true
// Example 2:
//
// Input: s = "()[]{}"
// Output: true
// Example 3:
//
// Input: s = "(]"
// Output: false
// Example 4:
//
// Input: s = "([)]"
// Output: false
// Example 5:
//
// Input: s = "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
const parentheseMap = {
    '}':'{',
    ']':'[',
    ')':'('
}
var isValid = function(s) {
    if(!s){
        return false;
    }
    const parentheses = s.split('');
    const isCloseBracket = (s) => {return parentheseMap[s] != undefined};

    let stack = [];
    if (isCloseBracket(parentheses[0])){ // return false if first element is close bracket
        return false;
    }
    for (let i = 0; i < parentheses.length; i++) {
        const elemenent = parentheses[i];
        if(!isCloseBracket(elemenent)){ //Push to stack open bracket
            stack.push(elemenent);
        } else { // If close bracket then consider to pop or return false
            if(parentheseMap[elemenent] == stack[stack.length - 1]){
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length == 0 ;
};

console.log(isValid('[]'))