function isArray(input) {
    return Array.isArray(input);
}

// Example usage:
console.log(isArray([1, 2, 3])); // true
console.log(isArray("Hello World")); // false
console.log(isArray({ name: "Deric" })); // false
console.log(isArray([])); // true
