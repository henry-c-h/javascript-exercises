const reverseString = function(words) {
    // if (words === '') {
    //     return ''
    // } else {
    //     const letters = words.split('');
    //     let res = '';
    //     for (let i = letters.length - 1; i >= 0; i--) {
    //         res += letters[i]
    //     }
    //     return res
    // }
    return words.split('').reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;
