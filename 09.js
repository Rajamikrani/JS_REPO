function findLargestAndSmallest(a, b, c) {
    let largest = Math.max(a, b, c);  // Find the largest number
    let smallest = Math.min(a, b, c); // Find the smallest number

    console.log(`Largest: ${largest}`);
    console.log(`Smallest: ${smallest}`);
}

// Example Usage
findLargestAndSmallest(10, 25, 5);  // Output: Largest: 25, Smallest: 5
findLargestAndSmallest(-1, -5, 3);  // Output: Largest: 3, Smallest: -5
findLargestAndSmallest(7, 7, 7);    // Output: Largest: 7, Smallest: 7
