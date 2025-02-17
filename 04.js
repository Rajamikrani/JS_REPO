function capitalizeWords(str) {
    return str.split(' ') // Split the string into words
              .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
              .join(' '); // Join words back into a string
}

// Example Usage
console.log(capitalizeWords("hello world"));       // Output: "Hello World"
console.log(capitalizeWords("javascript is fun")); // Output: "Javascript Is Fun"
console.log(capitalizeWords("this is a test"));    // Output: "This Is A Test"
