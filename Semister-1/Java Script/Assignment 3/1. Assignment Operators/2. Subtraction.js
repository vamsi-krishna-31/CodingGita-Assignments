// * * * // 2] Subtraction ( - ):

// 1. A bus has 80 seats, and 53 seats are occupied. Find the number of empty seats.

let totalSeats = 80;
seatsOccupied = 53;
seatsLeft = totalSeats - seatsOccupied
console.log(seatsLeft)

// 2. A student has 500 marks and loses 35 marks due to incorrect answers. Find the final marks.

let totalMarks = 500;
marksLost = 35;
finalMarks = totalMarks - marksLost
console.log(finalMarks)

// 3. A warehouse has 2,500 boxes and sends 875 boxes to a store. Find the remaining boxes.

let totalBoxes = 2500;
boxesSent = 875;
remainingBoxes = totalBoxes - boxesSent
console.log(remainingBoxes)

// 4. Predict the output:

// output: 7

// 5. Predict the output:

// output: 15

// 6. What is the output of 100 - 37?

// output: 63

// 7. A tank has 500 litres of water. After using 175 litres, how much water is left?

let waterInTank = 500;
waterUsed = 175;
waterLeft = waterInTank - waterUsed;
console.log(waterLeft)

// 8. What is the result of "50" - 20 and "50" - "20"? Explain any difference.

// output for both :30      // js changes the string into number and prints the output

// 9. A shopkeeper had 240 apples. He sold 95 in the morning and 67 in the evening. Write expressions to find how many apples are left.

let totalApples = 240;
soldMorning = 95;
soldEvening = 67;
totalApplesSold = soldMorning - soldEvening;
applesLeft = totalApples - totalApplesSold;


// 10. predict and explain the output:

console.log("100" - 50);        // 50       
// 100 present in string will be converted into integer by javascript and subtracted by 50. so, the output is 50.

console.log("abc" - 10);        // NaN
// "abc" is not a number so when java script converts string into integer the value is not found. so, the output is (NaN).

console.log(10 - "5" - "2");    // 3
// 10-5=>5  :   and then 5-2=>3 ------->the numbers which are in strings are converted by javascript.

console.log("10" - "5" - "2");  //3
// 10-5=>5  :   and then 5-2=>3 ------->the numbers which are in strings are converted by javascript.
