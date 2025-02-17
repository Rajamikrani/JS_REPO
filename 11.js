function findSmallestNumber() {
    // Prompt user to enter the number of integers
    const n = parseInt(prompt("Enter the number of integers:"));

    // Initialize an empty array to store the integers
    let numbers = [];

    // Accept n integers from the user
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Enter integer ${i + 1}:`));
        numbers.push(num);
    }

    // Find the smallest number
    let smallest = Math.min(...numbers);

    // Display the smallest number
    console.log("The smallest number is:", smallest);
}

// Call the function
findSmallestNumber();
