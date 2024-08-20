const palindromes = function (palindrome) {
    const alphaNum = ["A", "B", "C", 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let newArray = [];
    const upperArray = palindrome.toUpperCase().split("");
    for (let char of upperArray) {
        if (alphaNum.includes(char)) {
            newArray.push(char);
        }
    }
    const revArray = newArray.reverse();
    return newArray === revArray;
};

// Do not edit below this line
module.exports = palindromes;
