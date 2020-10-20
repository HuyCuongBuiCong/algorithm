

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || !strs.length){
        return ''
    }
    if(strs.length == 1){
        return strs[0];
    }

    const firstString = strs[0]
    const lengths = strs.map( (str) => str.length );
    const minLength = Math.min(...lengths);
    let longestCommon = ''
    for (let i = 0; i < minLength; i++) {
        const currentLetter = firstString[i];
        for (let j = 1; j < strs.length; j++) {
            const currentString = strs[j];
            if(currentString[i] != currentLetter){
                return longestCommon;
            } 
        }
        longestCommon += currentLetter;
    }
    
    return longestCommon;
};

console.log(longestCommonPrefix(["ab", "a"]))



