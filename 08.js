function compareTwoNumbers() {
    // Get two integers from the user
    const num1 = parseInt(prompt("Enter the first integer:"));
    const num2 = parseInt(prompt("Enter the second integer:"));

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid integers.");
        return;
    }

    // Compare the integers and display results
    if (num1 > num2) {
        alert(`The larger number is: ${num1}\nThe smaller number is: ${num2}`);
    } else if (num1 < num2) {
        alert(`The larger number is: ${num2}\nThe smaller number is: ${num1}`);
    } else {
        alert(`Both numbers are equal: ${num1}`);
    }
}

// Run the program
compareTwoNumbers();
