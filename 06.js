function daysUntilNextChristmas() {
    const today = new Date(); // Get the current date
    const currentYear = today.getFullYear();

    // Set the date for this year's Christmas
    let christmas = new Date(currentYear, 11, 25); // December is month 11 (0-indexed)

    // If today's date is after Christmas, calculate for next year's Christmas
    if (today > christmas) {
        christmas = new Date(currentYear + 1, 11, 25);
    }

    // Calculate the difference in milliseconds
    const timeDifference = christmas - today;

    // Convert milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
}

// Example usage:
console.log(`Days until next Christmas: ${daysUntilNextChristmas()}`);
