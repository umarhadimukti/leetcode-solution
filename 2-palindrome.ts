const isPalindrome = (x: number): boolean => {
    if (x < 0) return false;
    const numericalToString = x.toString();
    const reverseNumericString = numericalToString.split('').reverse().join('');
    
    return (numericalToString === reverseNumericString) ? true : false;
};

console.log(isPalindrome(101));