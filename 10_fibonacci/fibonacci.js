const fibonacci = function(idx) {
    if (typeof idx === 'string') {
        idx = parseInt(idx, 10);
    }
    if (idx < 0) {
        return 'OOPS'
    } else if (idx === 1 || idx === 2) {
        return 1;
    } else {
        let previous = 1;
        let next = 1;
        for (let i = 1; i <= idx - 2; i++) {
            let temp = next;
            next = previous + next;
            previous = temp;
        }
        return next;
    }
};

// Do not edit below this line
module.exports = fibonacci;
