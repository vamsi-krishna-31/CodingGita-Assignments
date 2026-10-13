// * * * //  1] Logical AND ( && ):

// 1. Stored username is "admin" and password is 1234. Check if both are valid using && and print the result.

let username = "admin";
let password= 1234;
let result = username && password;
console.log(result);


// 2.A user is logged in (isLoggedIn = true) and has permission (hasPermission = true). Check if they can access a page using &&.

let isLoggedIn = true;
let hasPermission = true;
let canAccess = isLoggedIn && hasPermission;
console.log(canAccess);


// 3. A product is in stock (inStock = true) and its price is less than ₹1000 (price = 800). Check if it can be bought using &&.

let inStock = true;
let price = 800;
console.log(inStock = true && price < 1000);


// 4. A student has marks 75 and attendance 80. Passing requires marks greater than 65 and attendance greater than 70. Check using &&.

let marks = 75;
let attendance = 80;
console.log(marks > 65 && attendance > 70);


// 5. Two conditions: isWeekend = true and isHoliday = false. A party happens only if both are true. Check using &&.

let isWeekend = true;
let isHoliday = false;
console.log(isWeekend == true && isHoliday == true);


// 6.Predict the output:                        

// Output => 0


// 7. Predict the output:                                    

// Output => 10


// 8. Predict the output:                           

// Output => 


// 9. Predict the output:                           

// Output => 0


// 10. Predict the output:

// output => false
