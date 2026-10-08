// * * * // 5] Modulus ( % ):

// 1. A teacher has 53 students and forms groups of 5.Find the number of students left over.

let students = 53;
groupSize = 5;
leftOverStudents = students % groupSize;
console.log(leftOverStudents)

// output : 3


// 2. A shop has 128 candies and packs 10 candies in each box.Find the number of candies left unpacked.

let candies = 128;
boxSize = 10;
leftOverCandies = candies % boxSize;
console.log(leftOverCandies)

// output : 8


// 3. A factory produces 237 toys and packs them in boxes of 6.Find how many toys are left after packing full boxes.

let toys = 237;
toysPerBox = 6;
leftOverToys = toys % toysPerBox;
console.log(leftOverToys)

// output : 3


// 4. A bus can carry 40 passengers.If 185 people are waiting, find how many people will be left after filling as many full buses as possible.

let people = 185;
busCapacity = 40;
peopleLeft = people % busCapacity;
console.log(peopleLeft)

// output : 25


// 5. Predict the output:

// output : NaN


// 6. What is the output of 29 % 5?

// output : 4


// 7. There are 23 chocolates to be packed in boxes of 4. How many chocolates will be left over?

let chocolates = 23;
boxSize = 4;
chocolatesLeft = chocolates % boxSize;
console.log(chocolatesLeft);

// output : 3


// 8. What is the result of 0 % 7 and 15 % 0? Explain.

// output 1 : 0
// output 2 : NaN


// 9. 47 pages need to be printed on sheets that hold 6 pages each. Find full sheets and pages left over.

let pages = 47;
pagesPerSheet = 6;
fullSheets = Math.floor(pages / pagesPerSheet);
pagesLeft = pages % pagesPerSheet;
console.log(fullSheets)
console.log(pagesLeft)

// output : 7 | 5


// 10. Predict and explain the outputs :

console.log(17 % 5);        // 2
// 17 ÷ 5 gives remainder 2.

console.log(-17 % 5);       // -2
// The remainder gets the sign of the first number.

console.log(17 % -5);       // 2
// The first number is positive, so the remainder is positive.

console.log(-17 % -5);      //-2
// The first number is negative, so the remainder is negative.

console.log(10 % 0);        //NaN
// Modulo by zero is not a valid mathematical operation, so JavaScript returns NaN.
