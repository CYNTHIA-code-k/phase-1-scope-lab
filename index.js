// Write your solution in this file!
// Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

// Write a function that accesses the global customerName variable, and uppercases it.
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// See the consequences of declaring a variable in global scope, by writing a new function that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'Alice';

// Write a function that attempts to change the constant.
function changeLeastFavoriteCustomer() {
  // This will result in an error, as you cannot reassign a value to a constant
  leastFavoriteCustomer = 'bob';
}

// Test the functions
console.log(upperCaseCustomerName()); // Output: BOB
console.log(bestCustomer); // Output: undefined (before calling setBestCustomer)
setBestCustomer();
console.log(bestCustomer); // Output: not bob
overwriteBestCustomer();
console.log(bestCustomer); // Output: maybe bob

// Attempt to change the constant
changeLeastFavoriteCustomer(); // This will throw an error
