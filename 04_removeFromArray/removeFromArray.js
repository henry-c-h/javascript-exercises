const removeFromArray = function(...args) {
    let res = args[0];
    for (const arg of args.slice(1)) {
        res = res.filter(elt => elt !== arg)
    }
    return res
};

// Do not edit below this line
module.exports = removeFromArray;
