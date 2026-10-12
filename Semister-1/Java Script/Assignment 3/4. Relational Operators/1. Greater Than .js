// * * * //  1] Greater than ( > ):

// 1. A student’s marks are 78. The passing marks are 40. Check whether the student has scored more than the passing marks.

let studentMarks = 78;
passingMarks = 40;
isStudentPassed = studentMarks > passingMarks
console.log(isStudentPassed)

// output : true


// 2. Temperature today is 35°C and yesterday it was 28°C. Check if today is hotter.

let temperatureToday = 35;
temperaturYesterday = 28;
isTodayHotter = temperatureToday > temperaturYesterday
console.log(isTodayHotter)

// output : true


// 3. Predict the output:

// output 1 : true
// output 2 : false
// output 3 : false


// 4. Predict the output:

// output 1 : true
// output 2 : true
// output 3 : false


// 5. What is the result of null > 0 and undefined > 0? Explain.

// output for both : false
// ---> null value = 0 and the question is null > 0 => 0>0 => false
// ---> undefined value = NaN and the question is undefined > 0 => NaN>0 => false


// 6. A shop has 120 items in stock. A customer wants to buy 85 items. Write a condition using > to check if stock is sufficient.

let itemsInShop = 120;
itemsCustomerBuy = 85;
isStockSufficient = itemsInShop > itemsCustomerBuy
console.log(isStockSufficient)

// output : true


// 7. Predict and explain:

// output 1 : true      ==> 1>0     =>true
// output 2 : false     ==> 10>2    => false
// output 3 : false     ==> Nan>5   => false
