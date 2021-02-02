/*
1. Style Guide

fix the following according to the style guide

const iceCreamTaste = 'chocolate';
let iceCreamDensity  = 10;

while (iceCreamDensity  > 0) {
    console.log('Drip...');
    iceCreamDensity  -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');

2. Primitives 

There are seven primitives in JS 

1. Number 
2. BigInt 
3. Undefined 
4. String
6. Boolean 
7. Symbol 


3. Max Int 

The max int in JS is 2**53-1
Number.MAX_SAFE_INTEGER; 
Number.MAX_VALUE;

4. Arithmetic Operator Precedence

**
( / *)
+
- 

5. Date

Date.now() returns the number of milliseconds since  number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

This is called unix time or epoch milliseconds 

6. Which year is this? 

the Date.getYear() method is depcrecated. You should use the Date.getFullYear()
method

e.g.

let thisYear = new Date().getFullYear()


7. Argument Signatures

`Array.prototype.join()` take zero or one arguments. If zero arguments, 
joins array into string with ',' as join character, if one argument, use that 
argument as the join character. 

Excess arguments are ignored. 

8. String Concatenation

String.prototype.concat() concats string to the calling string and returns 
a new string 


Stronlgy reccomend to use the `+` method instead 

9. Syntax Error 

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && (currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
*/