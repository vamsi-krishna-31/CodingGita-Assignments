// * * * //  4] Greater than or Equal to ( <= ):

// 1. Maximum speed limit is 60 km/h. A vehicle is travelling at 60 km/h. Check if it is within the limit.

let maximumSpeedLimit = 60;
vehicleTravelling = 60;
isVehicleInLimits = maximumSpeedLimit <= vehicleTravelling
console.log(isVehicleInLimits)

// output : true


// 2. A student needs at least 40 marks to pass. He scored 39. Check if he has failed.

let marksNeeded = 40;
marksScored = 39;
result = marksScored <= marksNeeded
console.log(result)

// output : true


// 3. Predict the output:

// output 1 : true
// output 2 : false
// output 3 : true


// 4. Predict the output:

// output 1 : true
// output 2 : true
// output 3 : true


// 5. What is the result of undefined <= 0? Explain.

// output : false
// ---> undefined value = NaN and the question is undefined <= 0 => NaN>=0 => false


// 6. A bag can hold maximum 10 books. Currently it has 10 books. Write a condition using <= to check if more books can be added.

let maximumBooks = 10;
currentBooks = 10;
cannotAddBooks = maximumBooks <= currentBooks
console.log(cannotAddBooks)

// output : true


// 7. Predict and explain:

// output 1 : true      ==> 0<=0        => true
// output 2 : true      ==> 0<=0        => true
// output 3 : false     ==> NaN<=5      => false
