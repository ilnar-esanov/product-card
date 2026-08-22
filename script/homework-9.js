// task #1 - filter array with numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNUmbers = numbers.filter((number) => number >= 5);
console.log(filteredNUmbers);

// task #2 - includes method
const fruits = ['apple', 'pear', 'cherry', 'watermelon'];
console.log(fruits.includes('apple'));

// task #3 - reverse array function 
const reverseArray = (array1) => array1.reverse();
console.log(reverseArray(numbers));
console.log(reverseArray(fruits));
