// * * * //  2] Less than ( < ):

// 1. A box can hold maximum 50 kg. Current weight is 42 kg. Check if more items can still be added.

let maximumWeight = 50;
currentWeight = 42;
itemsCanBeAddedMore = currentWeight < maximumWeight
console.log(itemsCanBeAddedMore)

// output : true


// 2. Age of a person is 16. Minimum age required is 18. Check if the person is underage.

let personAge = 16;
requiredAge = 18;
isPersonUnderage = personAge < requiredAge
console.log(isPersonUnderage)

// output : true


// 3. Predict the output:

// output 1 : true
// output 2 : false
// output 3 : false


// 4. Predict the output:

// output 1 : true
// output 2 : true
// output 3 : false


// 5. What is the result of null < 0 and undefined < 0? Explain.

// output for both : false
// ---> null value = 0 and the question is null < 0 => 0<0 => false
// ---> undefined value = NaN and the question is undefined < 0 => NaN<0 => false

// 6. A tank capacity is 500 litres. Current water level is 375 litres. Write a condition using < to check if it is not full.

let capacityOfTank = 500;
currentLevel = 375;
isTankNotFull = currentLevel < capacityOfTank
console.log(isTankNotFull)

// output : true


// 7. Predict and explain:

// output 1 : true      ==> 0<1         =>true
// output 2 : false     ==> "5"<"15"    => false
// output 3 : false     ==> Nan<5       => false
