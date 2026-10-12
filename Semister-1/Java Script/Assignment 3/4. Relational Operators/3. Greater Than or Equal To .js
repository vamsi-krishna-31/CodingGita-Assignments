// * * * //  3] Less than or Equal to ( >= ):

// 1. Minimum marks required for distinction is 75. A student scored 75. Check if the student gets distinction.

let marksStudentScored = 75;
marksRequired = 75;
distinction = marksStudentScored >= marksRequired
console.log(distinction)

// output : true


// 2. Ticket price is ₹300. A person has ₹300. Check if they can buy the ticket.

let amountPersonHave = 300;
costOfTicket = 300;
canPersonBuy = amountPersonHave >= costOfTicket
console.log(canPersonBuy)

// output : true


// 3. Predict the output:

// output 1 : true
// output 2 : true
// output 3 : false


// 4. Predict the output:

// output 1 : true
// output 2 : false
// output 3 : true


// 5. What is the result of undefined >= 0? Explain.

// output : false
// ---> undefined value = NaN and the question is undefined >= 0 => NaN>=0 => false


// 6. A lift can carry maximum 8 people. Currently 8 people are inside. Write a condition using >= to check if the lift is full or overloaded.

let maximumPeople = 8;
currebtPeople = 8;
isLiftFull = maximumPeople >= currebtPeople
console.log(isLiftFull)

// output : true


// 7. Predict and explain:

// output 1 : true      ==> 1>=1        => true
// output 2 : true      ==> 0>=0        => true
// output 3 : false     ==> NaN>=NaN    => false
