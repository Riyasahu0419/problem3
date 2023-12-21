// Arrow function to convert a character to lower case
const toLowerCase = char => char.toLowerCase();

// Arrow function to convert a given word to lower case
const wordToLowerCase = word => word.split('').map(toLowerCase).join('');

// Arrow function to convert an array of strings to an array of lower case strings
const arrayToLowerCase = arr => arr.map(wordToLowerCase);

// Sample Input
const inputArray = ["MA", "SA", "I", "SCH", "OOL"];

// Applying the function to the sample input
const outputArray = arrayToLowerCase(inputArray);

// Output
console.log(outputArray);
