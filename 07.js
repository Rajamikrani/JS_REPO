function performArithmeticOperations() {
    // Get inputs from the user
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
 
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter numeric values.");
        return;
    }

    // Perform arithmetic operations
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num2 !== 0 ? (num1 / num2).toFixed(2) : "undefined (division by zero)";

    // Display results
    alert(`
        Results:
        Addition: ${addition}
        Subtraction: ${subtraction}
        Multiplication: ${multiplication}
        Division: ${division}
    `);
}

// Run the function
performArithmeticOperations();
