// * * * // 3] Multiplication ( * ):

// 1. One notebook costs ₹45. Calculate the cost of buying 8 notebooks.

let costOfOneBook = 45;
totalBooks = 8;
totalCost = costOfOneBook*totalBooks;
console.log(totalCost)

// output : 360


// 2.A machine produces 120 bottles per hour. Calculate its production in 6 hours.

let bottlesPerHour = 120;
production = 6;
totalBottlesProduced = bottlesPerHour*production
console.log(totalBottlesProduced)

// output : 720


// 3. A garden has 7 rows with 15 plants in each row. Find the total number of plants.
let rows = 7;
plants = 15;
totalPlants = rows*plants;
console.log(totalPlants)

// output : 105


// 4. Predict the output:

// output : 20


// 5. Predict the output:

// output : 20


// 6. Predict the output:

// output : 96


// 7. One pizza costs ₹299. What is the total cost of 4 pizzas?

let costOfPizza = 299;
noOfPizza = 4;
totalCost=costOfPizza * noOfPizza
console.log(totalCost)

// output : 1196


// 8. What is the result of "7" * 6 and "7" * "6"?

// output of both : 42


// 9. A factory produces 45 units per hour. How many units does it produce in 8 hours? Write the expression and calculate.

let unitsPerhour = 45;
unitsInHours = 8;
totalUnitsProduced = unitsPerhour * unitsInHours
console.log(totalUnitsProduced)

// output : 360


// 10. Predict and explain the outputs:

console.log("5" * 3 * "2");      // 30
// The strings "5" and "2" are successfully converted into the numbers 5 and 2. 5 * 3 * 2 equals 30.

console.log("abc" * 4);          // NaN
// JavaScript tries to convert "abc" into a number, but since it contains letters, it results in NaN (Not a Number). Any math operation involving NaN will result in NaN

console.log(10 * "2.5");         // 25
// The string "2.5" is converted into the number 2.5. 10 * 2.5 equals 25.

console.log("10" * "2.5" * "0"); // 0
// All strings are successfully converted into numbers. Because you are multiplying by 0 at the end, the final result evaluates to 0.
