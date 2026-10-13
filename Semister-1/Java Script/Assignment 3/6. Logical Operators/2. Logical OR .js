// * * * //  2] Logical OR ( || ):

// 1. A user can login with either a correct password (passwordCorrect = true) or a valid OTP (otpValid = false). Check if login is allowed using ||.

let passwordCorrect = true;
let otpValid = false;
let loginPossible = passwordCorrect || otpValid;
console.log(loginPossible);


// 2. A discount applies if the user is a member (isMember = false) or has a coupon (hasCoupon = true). Check using ||.

let isMember = false;
let hasCoupon = true;
let result = isMember || hasCoupon;
console.log(result);


// 3. Entry is allowed if age is above 18 (age = 16) or height is above 150 cm (height = 155). Check using ||.

let age = 16;
let height = 155;
let allowed = (age > 18) || (age > 150);
console.log(allowed);


// 4. A form is valid if either email is given (emailGiven = true) or phone is given (phoneGiven = false). Check using ||.

let emailGiven = true;
let phoneGiven = false;
let valid = emailGiven || phoneGiven;
console.log(valid);


// 5. A game level opens if score is above 1000 (score = 900) or time bonus is collected (timeBonus = true). Check using ||.

let score = 900;
let timeBonus = true;
let result = (score > 1000) || (timeBonus == true);
console.log(result);


// 6. Predict the output:

// Output => 42


// 7. Predict the output:

// Output => Hello Hi


// 8. Predict the output:

// Output => true


// 9. Predict the output:

// Output => 5


// 10. Predict the output:

// Output => OK
