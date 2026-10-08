// * * * // 6] Exponentiation ( % ):

// 1. Find the volume of a cube with a side length of 6 cm using side ** 3.

let side = 6;
volume = side ** 3;
console.log(volume)

// output : 216


// 2. Calculate the total number of cells in a square arrangement with 9 cells on each side using side ** 2.

let cellSide = 9;
totalCells = cellSide ** 2;
console.log(totalCells)

// output : 81


// 3. Find the value of 5^4 (5 raised to the power 4) using the exponentiation operator.

let base = 5;
exponent = 4;
result = base ** exponent;
console.log(result)

// output : 625


// 4. A digital image has 1,024 pixels on each side. Find the total number of pixels using pixels ** 2

let pixels = 1024;
totalPixels = pixels ** 2;
console.log(totalPixels)

// output : 1048576


// 5. Predict the output:

// output : 0.5


// 6. What is the output of 3 ** 4?

// output : 81


// 7. Calculate the area of a square whose side is 9 units using the exponentiation operator.

let side = 9;
area = side ** 2;
console.log(area)

// output : 81


// 8. What is the result of 2 ** 5 and 5 ** 2? Are they the same?

// output 1 = 32
// output 2 = 25
// NO, they are not same


// 9. Predict and explain the outputs (and any errors):

console.log(2 ** 3 ** 2);          // right-associative
console.log((2 ** 3) ** 2);
console.log(2 ** -3);
// console.log(-2 ** 2);           // Remember: Syntax error
console.log((-2) ** 2);
console.log(4 ** 0.5);

// output : 
512
64
0.125
4
2


// 10. Predict the output:

// output : 1
