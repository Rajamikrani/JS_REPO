function getDaysDifference(date1, date2) {
    // Convert both dates to Date objects if they are in string format
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    // Calculate the difference in time (in milliseconds)
    let timeDiff = Math.abs(d2 - d1);

    // Convert the difference from milliseconds to days
    let diffInDays = timeDiff / (1000 * 3600 * 24);

    return diffInDays;
}

// Example usage:
let date1 = "2025-02-01"; // YYYY-MM-DD format
let date2 = "2025-02-17"; // YYYY-MM-DD format

console.log("The difference in days is: " + getDaysDifference(date1, date2));
