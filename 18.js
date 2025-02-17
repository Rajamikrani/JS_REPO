function getDateDifference(date1, date2) {
    // Convert both dates to Date objects if they are in string format
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Calculate the difference in time (in milliseconds)
    const timeDiff = Math.abs(d2 - d1);

    // Convert the difference from milliseconds to days
    const diffInDays = timeDiff / (1000 * 3600 * 24);

    return diffInDays;
}

// Example usage:
const date1 = "2025-02-01";  // YYYY-MM-DD format
const date2 = "2025-02-17";  // YYYY-MM-DD format
console.log("The difference in days is: " + getDateDifference(date1, date2));
