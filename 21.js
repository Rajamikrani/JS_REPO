function getWeekendDates() {
    // Get today's date
    let today = new Date();

    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let dayOfWeek = today.getDay();

    // Calculate the difference to the upcoming Saturday
    let daysToSaturday = 6 - dayOfWeek;

    // Calculate the date for the next Saturday
    let saturday = new Date(today);
    saturday.setDate(today.getDate() + daysToSaturday);

    // Calculate the date for the next Sunday
    let sunday = new Date(saturday);
    sunday.setDate(saturday.getDate() + 1);

    // Return the dates
    return {
        saturday: saturday.toDateString(),
        sunday: sunday.toDateString()
    };
}

// Example usage:
let weekendDates = getWeekendDates();
console.log("Saturday: " + weekendDates.saturday);
console.log("Sunday: " + weekendDates.sunday);
