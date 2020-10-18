// Link
// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:

// sameFrequency (182, 281) => true
// sameFrequency (34,14) => false
// sameFrequency (3589578, 5879385) => true
// sameFrequency (22,222) => false


function sameFrequency(n1, n2){
    let n1String = String(n1);
    let n2String = String(n2)
    if(n1String.length != n2String.length){
        return false;
    }

    const n1Frequency = stringToFrequencyObj(n1String); 
    const n2Chars = n2String.split('')
    for (let index = 0; index < n2Chars.length; index++) {
        const element = n2Chars[index];
        if(!n1Frequency[element]){
            return false
        } else {
            n1Frequency[element] -= 1;
        }
    }
    return true;
}
  

let stringToFrequencyObj = (str) => {
    if(!str){
        return {};
    }
    return str.split('').reduce((acc, val)=>{
     acc[val] ? acc[val] += 1 : acc[val] = 1
     return acc;
    }, {})
}

console.log('sameFrequency(0,1) '+ sameFrequency(0,1));
console.log('sameFrequency(123,12) '+ sameFrequency(123,12));
console.log('sameFrequency(123,213) '+ sameFrequency(123,213));
console.log('sameFrequency(3589578, 5879385) '+ sameFrequency(3589578, 5879385));

