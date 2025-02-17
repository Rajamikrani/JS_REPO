// Define the array of colors
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Define the array of ordinal suffixes
let suffixes = ["st", "nd", "rd"];

// Loop through the colors and display the choices
for (let i = 0; i < colors.length; i++) {
    let suffix = "th"; // Default suffix for 4th and beyond
    
    if (i === 0) {
        suffix = suffixes[0]; // 1st
    } else if (i === 1) {
        suffix = suffixes[1]; // 2nd
    } else if (i === 2) {
        suffix = suffixes[2]; // 3rd
    }
    
    // Display the choice with the appropriate suffix
    console.log(`${i + 1}${suffix} choice is ${colors[i]}.`);
}
