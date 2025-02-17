function findLargestNumber(arr) {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return;
    }

    let largest = Math.max(...arr); // Find the largest number using spread operator
    console.log(`Largest Number: ${largest}`);
}

// Example Usage
let numbers = [10, 25, 5, 42, 18]; 
findLargestNumber(numbers);  // Output: Largest Number: 42

let moreNumbers = [-1, -5, -3, -10];
findLargestNumber(moreNumbers);  // Output: Largest Number: -1
