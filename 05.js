function getCurrentDate() {
    const today = new Date();

    // Extract components
    
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add 1 to month and pad with 0
    const date = String(today.getDate()).padStart(2, '0'); // Pad day with 0
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                         'July', 'August', 'September', 'October', 'November', 'December'];
    const dayName = dayNames[today.getDay()];
    const monthName = monthNames[today.getMonth()];

    // Generate formatted strings
    const format1 = `${month}-${date}-${year}`; // mm-dd-yyyy
    const format2 = `${month}/${date}/${year}`; // mm/dd/yyyy
    const format3 = `${date}-${month}-${year}`; // dd-mm-yyyy
    const format4 = `${date}/${month}/${year}`; // dd/mm/yyyy
    const format5 = `${year} ${monthName} ${date}, ${dayName}`; // yyyy month date day

    // Return all formats
    return { format1, format2, format3, format4, format5 };
}

// Example usage:
const currentDate = getCurrentDate();
console.log('mm-dd-yyyy:', currentDate.format1);
console.log('mm/dd/yyyy:', currentDate.format2);
console.log('dd-mm-yyyy:', currentDate.format3);
console.log('dd/mm/yyyy:', currentDate.format4);
console.log('yyyy month date day:', currentDate.format5);
