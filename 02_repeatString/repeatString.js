const repeatString = function(str, num) {
    let res = ''
    if ((str === '') || (num === 0)) {
        return ''
    } else if (num < 0) {
        return 'ERROR'
    } else {
        for (let i = 0; i < num; i ++) {
            res += str
        }
        return res
    }
};

// Do not edit below this line
module.exports = repeatString;
