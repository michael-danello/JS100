/* 1. Lowercase

The String.prototype.toLowerCase() returns the calling string 
converted to lowercase

ex

let str = 'Hello World';
let lowerCase = str.toLocaleLowerCase();
console.log(lowerCase);

 2. Capitalize

There is no capitalize method in JS


 3. Array Access 

You can access an array with the [] method 

ex: 
let arr = [1,3];
let el = arr[0];
console.log(el)

4. Out of bounds 

Trying to an out-of-bounds index in an array yields an undefined

ex:
let ar = [1]
ar[2] -> undefined


5. Property vs Method


let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1];
trees.pop();
trees[trees.length - 1];

Line 40 returns the element at the last index of array, 'palm tree'
On line 41, we invok the pop method on the array, which returns the last element 
in the array, and removes that element from the array
Line 42 returns the last element of the new shortened array, 'sequoia'


6. Type of Primitive

typeof returns a string repersenting the  type of its operand


7. Return Values

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";
let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweet;   // 'string'
typeof words;   // 'object'
typeof isValid; // 'boolean'


8. Method chaining 

let tweet = 'here's a tweet'

tweet.split(' ');
tweet.split(' ').reverse().join(' ');

Split returns an array of chars, split by spaces. Reverse reverses the order of elements
in the array. Join concatenates the elements of an array into a string 
joined a space. 


9. Equailty 
=== is a strict equality operator. It only returns true if the elements on both 
side are of the same type and value 
== is a loose equality operator. It returns true if elements are the same value 
when coerced to the same type
so 
8==='8'
returns false 
8=='8'
returns true
*/