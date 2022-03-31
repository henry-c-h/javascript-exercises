const palindromes = function (words) {
    const re = /[a-zA-Z]+/g;
    const str = words.match(re).join('');
    const reversed = str.split('').reverse().join('');
    return (reversed.toUpperCase() === str.toUpperCase())
};

// Do not edit below this line
module.exports = palindromes;
