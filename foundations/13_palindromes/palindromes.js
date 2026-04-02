const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let a = str.split("");
    let length = a.length/2;
    let i = 0;
    while(i <= length){
        if (a[i] != a[length*2-i-1]) {
            return false;
        };
        i += 1
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;
