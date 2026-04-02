const fibonacci = function(a) {
    if (a == 1 || a == 0){
        return parseInt(a);
    }
    else if (a < 0){
        return "OOPS";
    };
    return fibonacci(a-1) + fibonacci(a-2)
};

// Do not edit below this line
module.exports = fibonacci;
