/*Problem: Given an input string, return an output string such that all the lower case characters should be sorted. Indices of non-lower case characters should remain the same as in the original input string.

Eg. Input -> 'Test@123 Google'
Output -> 'Teeg@123 Gloost'*/

function isLowerChar(char) {
    let code = char.charCodeAt(0);
    return code >= 97 && code <= 122;
}

function sortLowerChars(str) {
    let lowerCaseArr = [];
    let result = [];

    for (let char of str) { // loop through str
        if(isLowerChar(char)) { 
            lowerCaseArr.push(char); // store char into array to track lowercase vals
            result.push("##"); // store that char as ## in the result arr
        } else {
            result.push(char); // add current char into result arr
        }
    }
    lowerCaseArr.sort() // sort lowercase array
    
    for(let i=0, j=0; i<result.length; i++) { // loop through result arr
        if(result[i] === "##"){ // if element is ##
            result[i] = lowerCaseArr[j++]; // change it to the lowercase letter
        }
    }
    console.log(result)
    return result.join('');
}

console.log(sortLowerChars("Test@123 Google"))

