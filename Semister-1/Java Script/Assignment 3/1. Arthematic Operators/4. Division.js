// * * * // 4] Division ( / ):

// 1. A teacher distributes 144 pencils equally among 12 students. Find the number of pencils each student receives.

let pencilsDistributed = 144;
students = 12;
pencilsPerStudent = pencilsDistributed / students
console.log(pencilsPerStudent)

// output : 12


// 2. A train travels 360 kilometres in 6 hours. Find its average distance travelled per hour.

let distance = 360;
time = 6;
averageDistance = distance / time;
console.log(averageDistance)

// output : 60


// 3. A company distributes ₹72,000 equally among 9 departments. Find the amount received by each department.

let totalAmount = 72000;
departments = 9;
amountPerDepartment = totalAmount / departments;
console.log(amountPerDepartment)

// output : 8000


// 4. Predict the output:

// output :  5


// 5. Predict the output:

// output : 20


// 6. What is the output of 144 / 12?

// output : 12


// 7. 360 students are to be divided equally into 9 classrooms. How many students per classroom?

let students = 360;
classrooms = 9;
studentsPerClass = students / classrooms
console.log(studentsPerClass)

// output : 40


// 8. What is the result of "100" / 4 and "100" / "4"?

// output for both : 25


// 9. A total bill of ₹2400 is to be shared equally among 6 friends. Write the expression and find each person’s share.

let bill = 2400;
friends = 6;
share = 2400 / 6;
console.log(share)

// output : 400


// 10. Predict and explain the outputs:

console.log(10 / 0);                // Infinity
// Positive number divided by zero gives Infinity.

console.log(-10 / 0);               //-Infinity
// Negative number divided by zero gives -Infinity.

console.log(0 / 0);                 //NaN
// 0 / 0 is undefined in JavaScript, so the result is NaN.

console.log("20" / "4" / 2);        //2.5
// JavaScript converts "20" and "4" to numbers.

console.log("abc" / 5);             //NaN
// "abc" cannot be converted into a number, so the division results in NaN.
