// Function that outputs a greeting
function greet(name) {
    return `Hello, ${name}!`; // Returns a greeting message with the given name
}
console.log(greet('Sample Name')); // Calls the greet function with 'Sample Name' and logs the result

// Function that takes the diameter of a circle and finds the circumference
function circumference(diameter) {
    return Math.PI * diameter; // Returns the circumference using the formula π * diameter
}
console.log(circumference(4)); // Logs the circumference of the circle when the diameter is equal to 4

// First function that calls another function
function firstFunction() {
    console.log('This is the start of the first function'); // Logs the start of the first function
    secondFunction(); // Calls the second function
    console.log('This is the ending of the first function'); // Logs the end of the first function
}

// Second function which is called by the first function
function secondFunction() {
    console.log('The second function is in progress'); // Logs that the second function is in progress
}

firstFunction(); // Calls the first function, triggering the sequence of logs

// This function causes stack overflow, displaying a lot of errors into the console.
function overflow() {
    overflow(); // Function that calls itself indefinitely
}

overflow(); // Initiates the recursive call, leading to a stack overflow