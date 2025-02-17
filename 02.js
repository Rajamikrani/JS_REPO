function alphabetOrder(str) {
    return str.split('').sort().join('');
}

// Example Usage
console.log(alphabetOrder('webmaster'));  // Output: 'abeemrstw'
console.log(alphabetOrder('javascript')); // Output: 'aacijprstv'
