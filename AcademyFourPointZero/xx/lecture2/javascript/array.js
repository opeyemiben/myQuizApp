const myArray = [1, 2, 3, 4, 5]; //string literal declaration
console.log(myArray);

const arr = new Array(1, 2, 3); //new keyword
console.log(arr);

//indexing an array
console.log(myArray[0]);

console.log(myArray[3]);

//assign elements
myArray[0] = 10;

console.log(myArray);

//convert array to string
let fruits = ['orange','pear','mango'];
let fruits2 = fruits.toString();
console.log(fruits);
console.log(fruits2);

//array length
console.log(fruits.length);
console.log(myArray.length);

//get the last item of an array

console.log(fruits[fruits.length - 1]); // fruits[2]

//get the index of an array element
console.log(fruits.indexOf('pear'));

//isArray
console.log(typeof fruits)

console.log(Array.isArray(fruits));
console.log(Array.isArray(fruits2));

