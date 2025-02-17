function countVowels(str) {
    let vowels = 'aeiouAEIOU'; // Define vowel characters (both uppercase and lowercase)
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example Usage
console.log(countVowels("webmaster")); // Output: 3 (e, a, e)
console.log(countVowels("JavaScript")); // Output: 3 (a, a, i)
console.log(countVowels("HELLO WORLD")); // Output: 3 (E, O, O)
