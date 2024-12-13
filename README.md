# Unexpected Type Coercion in JavaScript

This example demonstrates a common JavaScript pitfall: type coercion. JavaScript's dynamic typing can lead to unexpected behavior if you're not careful about variable types.

## The Bug

The `foo` function adds two arguments. When called with a number and a string, it concatenates them instead of adding them numerically. This is due to JavaScript's implicit type conversion.

## The Solution

The solution is to explicitly check the type of the arguments using `typeof` and handle the addition based on their types. We can also use `parseInt()` or `parseFloat()` to convert the string argument to a number before adding.

## How to run the code

1. Save the code in two files, `bug.js` and `bugSolution.js`. 
2. Open your browser's developer console.
3. Run the files by either: 
   - Copy and paste into the browser console. 
   - Create an HTML file to include them and open it in the browser.