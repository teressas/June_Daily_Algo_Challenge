/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
    // initialize a map to store the word and the length
    let memory = {},
    // initialize a count to check the longest sequence we can create from one word
    longestLocal = 0,
    // initialize a count to check the longest chain count
    resultCount = 0,
    // initialize a var to store the word after removing the [i]th char
    sequence = "";
    // sort the words list by length
    words.sort((a,b)=> a.length - b.length);
    // console.log(words)
    // iterate through words
    for(let word of words){
        // console.log("w",word)
        for(let i=0; i < word.length; i++){
            // for each char remove the current ith char from the string
            sequence = word.slice(0,i) + word.slice(i+1);
            // console.log(sequence)
            // check if the string exists in map, if it does return the val + 1 
            // and compare it to the current longest sequence of the word and store the val in the var above
            longestLocal = Math.max(longestLocal, (memory[sequence] || 0) + 1);
            // console.log(longestLocal)
        }
        // exit the loop 
        // have var above hold the current longest chain count
        resultCount = Math.max(resultCount, longestLocal);
        // console.log("32",resultCount)
        // add the word to map and 
        memory[word] = longestLocal;
        // console.log("m",memory)
        // reset the length for the next word
        longestLocal = 0;
    }

    // return the current longest chain count 
    return resultCount;
};

// words = ['abcd', 'abc', 'bcd', 'abd', 'ab', 'ad', 'b'];
// words = ["a","b","ba","bca","bda","bdca"]
words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
// words = ["abcd","dbqca"]
console.log(longestStrChain(words));
/*
['abcd', 'abc', 'bcd', 'abd', 'ab', 'ad', 'b'];
[b, ab, ad, abc, abd, bcd, abcd]
b => longest = 1; 
ab => slice = b => longest = 2 because b:1 and (memory[prevString] || 0)+1
   => slice = a => longest = remains at 2
   => memory[word] = longest;
ad => slice = d => longest = 1 (memory[prevString] || 0)+1
   => slice = a => longest = 1
abc => slice bc => longest = 1
    => slice ac => longest = 1
    => slice ab => longest = 3 because ab: 2 and (memory[prevString] || 0)+1
bcd => slice cd => longest = 1
    => slice bd => longest = 1
    => slice bc => longest = 1
abd => slice bd => longest = 1
    => slice ad => longest = 2
    => slice ab => longest = 3
abcd => slice bcd => longest = 2 , bcd: 1 and (memory[prevString] || 0)+1
     => slice acd => longest = 2 , previous length is max
     => slice abd => longest = 4 , adb: 3 and (memory[prevString] || 0)+1
     => slice abc => longest = 4 , abc: 3 and (memory[prevString] || 0)+1
memory{b:1, ab: 2, ad: 1, abc: 3, bcd: 1, adb: 3}   
*/