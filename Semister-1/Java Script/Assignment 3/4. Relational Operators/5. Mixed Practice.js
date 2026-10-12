// * * * //  5] Mixed Practice ( >, <, >=, <=):

// 1. Write expressions to check:
    
    // A. Whether age 18 is greater than or equal to voting age 18.
    console.log(18>=18)

    // B. Whether temperature 32 is less than 35.
    console.log(32<35)

    // C. Whether score 90 is greater than 85.
    console.log(90>85)


// 2. Predict the output:

// output 1 : true
// output 2 : true
// output 3 : false
// output 4 : false


// 3. A product costs ₹499. A customer has ₹500. Write conditions using >= and < to decide if the customer can buy it and if any change will be left.

// using ">="
let costOfProduct = 499;
customerHave = 500;
canCustomerBuy = customerHave >= costOfProduct;
console.log(canCustomerBuy)
// output : true

// using "<"
let costOfProduct = 499;
customerHave = 500;
canCustomerBuy = costOfProduct < customerHave;
console.log(canCustomerBuy)
// output : true


// 4. Explain why "10" > "2" is false but 10 > 2 is true.

// Because, "10">"2" in this case the java script runs with the help of ASCII Value because the input is in string so, output is false. in other case 10 > 2 the both inputs are in numbers so, the output is true.
