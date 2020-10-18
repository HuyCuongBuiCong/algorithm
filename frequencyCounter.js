function sameFrequency(n1, n2){
    let n1String = String(n1);
    let n2String = String(n2)
    if(n1String.length != n2String.length){
        return false;
    }

    const n1Frequency = stringToObj(n1String); 
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
  

let stringToObj = (str) => {
    if(!str){
        return {};
    }
    return str.split('').reduce((acc, val)=>{
     acc[val] ? acc[val] += 1 : acc[val] = 1
     return acc;
    }, {})
}

console.log(sameFrequency(123,21));