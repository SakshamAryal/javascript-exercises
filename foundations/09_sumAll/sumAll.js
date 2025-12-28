const sumAll = function(a,b) {
    let output = 0;
    if (a < 0 || b < 0 || typeof(a) != "number" || typeof(b) != "number" || a%1 != 0 || b%1 != 0){
        return "ERROR";
    }
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++){
        output += i;
    }
    return output
};

// Do not edit below this line
module.exports = sumAll;
