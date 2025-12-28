const reverseString = function(word) {
    let output = "";
    let i = word.length- 1;
    while (i >= 0){
        output += word[i];
        i -= 1;
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
