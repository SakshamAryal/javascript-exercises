const removeFromArray = function(list) {
    let arr = Array.prototype.slice.call(arguments, 1);
    return list.filter(a => !arr.includes(a));
};

// Do not edit below this line
module.exports = removeFromArray;
