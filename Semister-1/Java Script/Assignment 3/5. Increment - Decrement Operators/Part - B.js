// * * * //  Part B :

// 6.

x = 5
y = x++
console.log(x,y)

// output : 6 , 5
// Post-increment first assigns the old value of x to y, then increases x by 1.

// 7. 

let a = 5;
let b = ++a;
console.log(a,b)
// output : 6 , 6
// Pre increment first increases a by 1 and then assigns the new value to b. Unlike post increment, it increments before assignment.


// 8. 

let lives = 3;
let previousLives = lives--;
console.log(lives,previousLives)

// output : 2 , 3


// 9. 

let attempts = 0;
let currentAttempts = ++attempts;
console.log(attempts,currentAttempts)

// output : 1 , 1


// 10. 

let points = 100;
points++;
points--;
console.log(points);

// output : 100
