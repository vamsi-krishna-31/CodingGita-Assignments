// * * * // 1] Addition ( + ):

// 1. A school collected ₹15,000 from one class and ₹12,500 from another class. Find the total collection.

let class1 = 15000;
class2 = 12500;
totalCollection = class1+class2;
console.log(totalCollection)

// 2. A person reads 18 pages in the morning and 25 pages in the evening. Find the total pages read.

let morning = 18;
evening = 25;
totalPagesRead = morning+evening;
console.log(totalPagesRead)

// 3. A shop sold 125 items on Monday and 178 items on Tuesday. Find the total items sold.

let monday = 125;
tuesday = 178;
totalItemsSold = monday+tuesday;
console.log(totalItemsSold)

// 4. Predict the output:

// output = 105

// 5. Predict the output:

// output = 53

// 6. What is the output of 15 + 27?

// output = 42

// 7. Calculate the total price if a book costs ₹350 and a pen costs ₹45.

let costOfBook = 350;
costOfPen = 45;
totalPrice = costOfBook + costOfPen;
console.log(totalPrice)

// 8. What is the result of "25" + 10 and why?

// output = 2510

// 9. A person has ₹2000 in their wallet. They buy items worth ₹750 and ₹320. Write an expression using + to find the total spent, then calculate the remaining balance.

let totalAmount = 2000;
amounts = 750 + 320
totalSpent = amounts
amountRemaining = totalAmount - totalSpent
console.log("Total spent =",totalSpent)
console.log("Remaining Amount =",amountRemaining)

// 10. Predict the outputs and explain:

console.log(5 + "5" + 5);   // output: 555      // the middle value is in string so javascript converts all the values to string and run the code
console.log(5 + 5 + "5");   // output: 105      // first two operands are in integer so they will get added and then the output (10) will be added to "5"
console.log("5" + 5 + 5);   // output: 555      //the first operand is in string so all the values will be converted into strings 
