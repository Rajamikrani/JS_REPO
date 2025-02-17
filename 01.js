function reverseNumber(num) {
    // Convert number to string, split into array, reverse, and join back
    let reversed = parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
    return reversed;
}

// Example Usage
console.log(reverseNumber(12345));  // Output: 54321
console.log(reverseNumber(-6789));  // Output: -9876
console.log(reverseNumber(100));    // Output: 1
