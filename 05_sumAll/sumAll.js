const sumAll = function(first, second) {
    let res = 0;
    if (typeof first !== 'number' || typeof second !== 'number' ||
    first < 0 || second < 0) {
        return 'ERROR';
    } else {
        const start = (first >= second) ? second : first;
        const end = (first >= second) ? first : second;
        for (let i = start; i <= end; i++) {
            res += i;
        }
        return res;
    }
};

// Do not edit below this line
module.exports = sumAll;
