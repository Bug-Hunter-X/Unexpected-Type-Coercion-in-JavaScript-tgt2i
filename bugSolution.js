function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else if (typeof a === 'string' && typeof b === 'number') {
    return parseInt(a) + b; // Convert string to number
  } else if (typeof a === 'number' && typeof b === 'string') {
    return a + parseInt(b); // Convert string to number
  } else {
    return "Invalid input types"; // Handle other cases
  }
}
console.log(foo(1, "1")); // Output: 2
console.log(foo(1, 1)); // Output: 2
console.log(foo("1", "1")); //Output: 2
console.log(foo(1, "a")); // Output: Invalid input types